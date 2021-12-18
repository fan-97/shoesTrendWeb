import { get, post } from './http'

export const getALlTrend = p => get('getAllTrend', p);
export const getTrendByArticle = p => get('/shoes/trend', p);
