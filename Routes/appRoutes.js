const appController = require('./../Controller/appController');
const app = require('./../server.js');
const express = require('express');

app.use(express.json());

app
  .route('/api/v1/tours')
  .get(appController.getAllTours)
  .post(appController.createTour);

app
  .route('/api/v1/tours/:id')
  .get(appController.getTour)
  .patch(appController.updateTour)
  .delete(appController.deleteTour);
