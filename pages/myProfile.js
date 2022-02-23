import { Avatar } from "@material-ui/core";
import styles from "../styles/Home.module.css";

export default function myprofile({ users }) {
  return (
    <div className={styles.profile}>
      {users.map((user) => {
        return (
          <div className={styles.profileInfo} key={user.name.first}>
            <Avatar src={user.picture.large} className={styles.profileIcon} />
            <div className={styles.userInfo}>
              <h2>
                {user.name.first} {user.name.last}
              </h2>
              <div className={styles.info}>
                <p>{user.login.username}</p>
                <p>{user.email}</p>
              </div>
            </div>
          </div>
        );
      })}
      <h5>No Posts Yet</h5>
    </div>
  );
}

export async function getServerSideProps() {
  const userResponse = await fetch(`https://randomuser.me/api/?results=1`);
  const userData = (await userResponse.json()).results;

  return {
    props: {
      users: userData,
    },
  };
}
