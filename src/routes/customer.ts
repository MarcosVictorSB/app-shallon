import express, { Router } from 'express';

const customerRoutes = Router();

customerRoutes.get('/', (request, response) => {
  response.json({message: 'customer'})
})


export {
  customerRoutes
}