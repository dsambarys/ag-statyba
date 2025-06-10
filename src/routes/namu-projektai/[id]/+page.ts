import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

const validProjects = ['moldavitas', 'peridotas', 'alabastras'];

export const load: PageLoad = ({ params }) => {
    if (!validProjects.includes(params.id)) {
        throw error(404, 'Project not found');
    }

    return {
        id: params.id
    };
}; 