import React from "react";
import styles from "./modalWindowStyle.module.css";
import { RiCloseLine } from "react-icons/ri";
import { useForm } from "react-hook-form";

const Modal = ({ setIsOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    if (Object.keys(errors).length > 0) {
      e.preventDefault();
      return errors;
    }
    console.log(data);
    setIsOpen(false);
  };
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Форма додавання типу</h5>
          </div>
          <form
            id="form"
            method="post"
            name="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setIsOpen(false)}
            >
              <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>
            <div className={styles.modalContent}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter name of type"
                  name="title"
                  id="title"
                  {...register("title", {
                    required: "Title is required",
                    minLength: {
                      value: 5,
                      message: "Title must be at least 5 characters",
                    },
                    maxLength: {
                      value: 30,
                      message: "Title must be at most 30 characters",
                    },
                    pattern: {
                      value: /^[A-Za-z0-9]+$/,
                      message: "Title must contain only letters and numbers",
                    },
                  })}
                />
                {errors.title && (
                  <p className="error">{errors.title.message}</p>
                )}
              </div>
            </div>
            <div className={styles.modalActions}>
              <div className={styles.actionsContainer}>
                <button
                  className={styles.createBtn}
                  type="submit"
                  id="submit"
                  onClick={() => setIsOpen(true)}
                >
                  Create
                </button>
                <button
                  className={styles.cancelBtn}
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
