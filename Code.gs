/**
 * Google Apps Script Backend for R2 Consulting Group
 * Deploy as a Web App: Execute as: Me | Access: Anyone
 */

const CORS_HEADERS = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400"
};

const DATA_SPREADSHEET_ID = ""; // Optional: Specific spreadsheet ID else uses Active

// Add an OPTIONS handler for CORS preflight requests
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders(CORS_HEADERS);
}

function doGet(e) {
  try {
    const action = e.parameter.action;
    let data = [];

    if (action === "getCaseStudies") {
      data = getCaseStudies();
    } else if (action === "getServices") {
      data = getServices();
    } else {
      return errorResponse("Invalid or missing action in doGet", 400);
    }

    return successResponse(data);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
}

function doPost(e) {
  try {
    if (!e.postData || !e.postData.contents) {
       return errorResponse("No POST body found", 400);
    }

    const body = JSON.parse(e.postData.contents);
    const action = body.action || e.parameter.action;

    if (action === "submitContact") {
      return handleContactSubmission(body);
    } else if (!action && (body.name && body.email && body.message)) {
      // Fallback if action is missing but body matches contact schema
      return handleContactSubmission(body);
    }

    return errorResponse("Invalid or missing action in doPost", 400);
  } catch (error) {
    return errorResponse(error.toString(), 500);
  }
}

// ------ Handlers ------

function getCaseStudies() {
  const ss = getSpreadsheet();
  const sheet = ss.getSheetByName("CaseStudies");
  if (!sheet) throw new Error("Sheet 'CaseStudies' not found");

  const rows = sheet.getDataRange().getValues();
  if (rows.length <= 1) return [];

  const headers = rows[0];
  const caseStudies = [];

  for (let i = 1; i < rows.length; i++) {
    const rowObj = rowToObject(headers, rows[i]);
    // Check if visible is "TRUE" or boolean true
    if (String(rowObj.visible).toUpperCase() === "TRUE") {
      caseStudies.push(rowObj);
    }
  }

  return caseStudies;
}

function getServices() {
  const ss = getSpreadsheet();
  const sheet = ss.getSheetByName("Services");
  if (!sheet) throw new Error("Sheet 'Services' not found");

  const rows = sheet.getDataRange().getValues();
  if (rows.length <= 1) return [];

  const headers = rows[0];
  const grouped = {};

  for (let i = 1; i < rows.length; i++) {
    const rowObj = rowToObject(headers, rows[i]);
    const div = rowObj.division || "General";
    if (!grouped[div]) {
      grouped[div] = [];
    }
    grouped[div].push(rowObj);
  }

  return grouped;
}

function handleContactSubmission(body) {
  const { name, email, phone, company, division, message } = body;
  
  if (!name || !email || !message) {
      return errorResponse("Missing required fields: name, email, message", 400);
  }

  const ss = getSpreadsheet();
  let sheet = ss.getSheetByName("ContactLeads");
  
  if (!sheet) {
      // Create sheet and setup headers if missing
      sheet = ss.insertSheet("ContactLeads");
      sheet.appendRow(["Timestamp", "Name", "Email", "Phone", "Company", "Division", "Message"]);
  }

  const timestamp = new Date();
  sheet.appendRow([timestamp, name, email, phone, company, division, message]);

  // Send an email notification to the owner
  const ownerEmail = Session.getEffectiveUser().getEmail();
  const subject = `New Website Lead: ${name} (${company || "Individual"})`;
  const textBody = `
You have a new contact form submission from the R2 Consulting Group website.

Date: ${timestamp}
Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Company: ${company || "N/A"}
Division of Interest: ${division || "General Consulting"}

Message:
${message}
  `;

  MailApp.sendEmail({
    to: ownerEmail,
    subject: subject,
    body: textBody
  });

  return successResponse({ message: "Received" });
}

// ------ Utilities ------

function getSpreadsheet() {
  return DATA_SPREADSHEET_ID ? SpreadsheetApp.openById(DATA_SPREADSHEET_ID) : SpreadsheetApp.getActiveSpreadsheet();
}

function rowToObject(headers, row) {
  const obj = {};
  for (let i = 0; i < headers.length; i++) {
    const key = String(headers[i]).trim();
    if (key) obj[key] = row[i];
  }
  return obj;
}

function successResponse(data) {
  const output = JSON.stringify({ success: true, data: data });
  return createResponse(output);
}

function errorResponse(message, status) {
  const output = JSON.stringify({ success: false, error: message });
  return createResponse(output);
}

function createResponse(jsonString) {
  var output = ContentService.createTextOutput(jsonString);
  output.setMimeType(ContentService.MimeType.JSON);
  
  // Note: ContentService automatically handles some headers, 
  // but we can try to set them on output or rely on standard GAS web app behavior
  // For GAS, returning JSON cross-origin generally works with standard ContentService.MimeType.JSON
  // We can't actually set arbitrary headers on ContentService in GAS reliably, 
  // but it's set up to allow cross-domain requests inherently.
  
  return output;
}
