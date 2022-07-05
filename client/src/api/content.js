import client from './client';

const getContentById = (id) => client.get(`/content/${id}`)

const content = {
    getContentById
};

export default content;