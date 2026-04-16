import { search_queries } from '../data/search_queries';

export class data_factory
{
    static get_all_categories()
    {
        return Object.keys(search_queries);
    }

    static get_search_data(category)
    {
        return search_queries[category];
    }
}