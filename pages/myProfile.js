import { Avatar } from "@material-ui/core";
import styles from "../styles/Home.module.css";

export default function myprofile({ users }) {
  return (
    <div className={styles.profile}>
      {users.map((user) => {
        return (
          <div className={styles.profileInfo} key={user.name.first}>
            <Avatar src={user.picture.large} className={styles.profileIcon} />
            <div>
              <h2>
                {user.name.first} {user.name.last}
              </h2>
              <div className={styles.info}>
                <p>{user.email}</p>
                <p>{user.login.username}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch(`https://randomuser.me/api/?results=1`);
  const data = (await response.json()).results;

  return {
    props: {
      users: data,
    },
  };
}
