import { mockUsers } from "./constants.js";

export const resolveIndexUserById = (request, response, next) => {
    const { params: { id } } = request;

    const parsedId = parseInt(id);
    if(isNaN(parsedId)) return response.sendStatus(400);

    const findUserIndex = mockUsers.findIndex(
        (user) => user.id === parsedId)

    if(findUserIndex === -1) return response.sendStatus(404);
    request.findUserIndex = findUserIndex;
    next();
}