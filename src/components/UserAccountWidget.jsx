import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const UserAccountWidget = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  return (
    <div
      id="widget__current-user"
      title={`User Profile: ${currentUser.username}`}
    >
      <img
        id="img__user-icon"
        src={currentUser.avatar_url}
        alt={`User Profile: ${currentUser.username}`}
      />
      <p id="widget__username">{currentUser.username}</p>
    </div>
  );
};

export default UserAccountWidget;
