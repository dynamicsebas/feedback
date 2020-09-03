import { useContextAuth } from '../lib/auth';
import useDashboard from '../lib/hooks/useDashbord';
import fetcher from '../lib/util/fetcher';
import useSWR from 'swr';

const Dashboard = () => {
    const { user } = useContextAuth();
    const { data } = useSWR(
        user ? '/api/sites' : null,
        fetcher
    );
    const {
        site,
        handleFormSubmit,
        handleOnInputChange,
    } = useDashboard(user);

    return (
        <div>
            <h1>Dashboard</h1>
            <hr />
            <h2>Add new site</h2>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor='siteName'>SiteName</label>
                <input
                    type='text'
                    name='name'
                    onChange={handleOnInputChange}
                    value={site.name}
                />
                <label htmlFor='siteUrl'>SiteUrl</label>
                <input
                    type='text'
                    name='url'
                    onChange={handleOnInputChange}
                    value={site.url}
                />
                <button type='submit'>ADD</button>
            </form>
            <p>{JSON.stringify(site, null, 2)}</p>
            <hr />
            <h2>sites :</h2>
            <p>{JSON.stringify(data, null, '****')}</p>
        </div>
    );
};

export default Dashboard;
