const notificationController = require('../controllers/ticket.controllers');
const notificationMiddlewares = require('../middlewares/ticket.middlewares');

const routes = (app) => {
    app.post(
        '/notiservice/api/v1/notification',
        notificationMiddlewares.verifyTicketNotificationCreateRequest,
        notificationController.createTicket
    );
}

module.exports = routes;