import { useState } from 'react';
import { mutate } from 'swr';
import { useContextAuth } from '../auth';
import { createSite } from '../db';

const rawSite = {
    name: '',
    url: '',
};

const useDashboard = () => {
    const { user } = useContextAuth();
    const [site, setSite] = useState(rawSite);

    const onCreateSite = ({ name, url }) => {
        const newSite = {
            authorId: user.uid,
            createdAt: new Date().toISOString(),
            name,
            url,
        };

        const { id } = createSite(newSite);

        mutate(
            '/api/sites',
            async data => ({
                sites: [{ id, ...newSite }, ...data.sites],
            }),
            false
        );

        setSite(rawSite);
    };

    function handleFormSubmit(e) {
        e.preventDefault();
        onCreateSite(site);
    }

    function handleOnInputChange(e) {
        setSite({
            ...site,
            [e.target.name]: e.target.value,
        });
    }

    return {
        site,
        handleFormSubmit,
        handleOnInputChange,
    };
};

export default useDashboard;
