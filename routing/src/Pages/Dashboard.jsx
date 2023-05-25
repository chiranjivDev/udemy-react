const Dashboard = ({user}) => {
    return <>
        <h3>Dashboard</h3>
        <h4>Welcome, {user?.username}</h4>
    </>
};

export default Dashboard;