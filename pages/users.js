import User from "../components/User"

function UserList({ users }) {
    return (
        <div>
            <h2>List of users</h2>
            {
                users.map(user => {
                    return (
                        <div key={user.id}>
                            <User user={user} />
                        </div>
                    )
                })
            }
        </div>
    )
}
export default UserList;

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return {
        props: {
            users: data
        }
    }
}