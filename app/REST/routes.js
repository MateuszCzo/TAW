import userEndopoint  from './user.endpoint';

const routes = function (router)
{
    userEndopoint(router);
};

export default routes;
