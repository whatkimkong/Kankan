import { useRef } from 'react';

function ProfileForm(props) {
  const oldPasswordRef: any = useRef();
  const newPasswordRef: any = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredOldPassword = oldPasswordRef.current.value;
    const enteredNewPassword = newPasswordRef.current.value;

    // optional: Add validation

    props.onChangePassword({
      oldPassword: enteredOldPassword,
      newPassword: enteredNewPassword
    });
  }

  return (
    <form className={""} onSubmit={submitHandler}>
      <div className={""}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPasswordRef} />
      </div>
      <div className={""}>
        <label htmlFor='old-password'>Old Password</label>
        <input type='password' id='old-password' ref={oldPasswordRef} />
      </div>
      <div className={""}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;