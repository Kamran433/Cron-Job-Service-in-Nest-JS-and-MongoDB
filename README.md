# Cron Job Service in Nest JS with MongoDB

This project aims to provide a robust and scalable service for managing cron jobs using Nest JS with MongoDB as the database backend. The service allows users to create, update, delete, and retrieve cron jobs, while also implementing features like scheduled execution, rate limiting, API throttling, webhook integration, and maintaining a comprehensive history of cron job triggers and responses.

## Overview

The Cron Job Service is designed to efficiently manage cron jobs by storing them in a MongoDB database. It offers the following functionalities:

- **CRUD Operations:** Perform Create, Read, Update, and Delete operations for managing cron jobs.
- **Cron Job Definition:** Define cron jobs with essential details such as name, trigger link, API key, schedule timings, and start date.
- **Scheduled Execution:** Automatically execute cron jobs based on their scheduled timings.
- **Scalability:** Ensure scalability to handle a large number of cron jobs efficiently.
- **Rate Limiting and API Throttling:** Implement mechanisms for rate limiting and API throttling to maintain stability and prevent abuse.
- **Webhook Integration:** Provide a webhook endpoint to receive data from other services, store it in JSON format, and associate it with the corresponding cron job's ID and creation date.
- **History Tracking:** Maintain a history of cron job triggers and their responses, including timestamps for creation and updates.

## Requirements

1. **Technology Stack:** Utilize Nest JS for the backend and MongoDB for the database.
2. **CRUD Operations:** Implement Create, Read, Update, and Delete operations for managing cron jobs.
3. **Cron Job Definition:** Define cron jobs with essential attributes like name, trigger link, API key, schedule timings, and start date.
4. **Scheduled Execution:** Automatically execute cron jobs based on their scheduled timings.
5. **Scalability:** Ensure the service can handle a large volume of cron jobs efficiently without performance degradation.
6. **Rate Limiting and API Throttling:** Implement mechanisms to restrict the rate of incoming requests to prevent abuse and maintain system stability.
7. **Webhook:** Provide an endpoint to receive data from external services, store it in JSON format, and associate it with the relevant cron jobs.
8. **History Tracking:** Store a comprehensive history of cron job triggers and their responses, including timestamps for creation and updates.

## APIs

The Cron Job Service exposes the following APIs:

- `POST /cron-jobs`: Create a new cron job.
- `PUT /cron-jobs/{id}`: Update an existing cron job.
- `DELETE /cron-jobs/{id}`: Delete a cron job.
- `GET /cron-jobs`: Retrieve all cron jobs.
- `GET /webhooks`: Retrieve all webhook data.

## Getting Started

To get started with the Cron Job Service, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up MongoDB and configure the connection in the project.
4. Run the application using `npm start`.
5. Access the APIs using the provided endpoints.

## Conclusion

The Cron Job Service provides a powerful solution for managing cron jobs efficiently with features like scheduled execution, rate limiting, webhook integration, and comprehensive history tracking. It leverages Nest JS and MongoDB to deliver a scalable and robust backend solution for your cron job management needs.
