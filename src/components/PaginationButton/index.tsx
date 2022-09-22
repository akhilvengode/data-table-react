import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import Button from "../Button";
import { ButtonType } from "../../types/Button";
import styles from "./index.module.css";
import React from "react";

interface PaginationButtonType extends ButtonType {
  dir: "left" | "right";
}

const PaginationButton = ({ dir, ...props }: PaginationButtonType) => {
  return dir === "left" ? (
    <Button {...props}>
      <div className={styles["pagination-button__arrow"]}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    </Button>
  ) : (
    <Button {...props}>
      <div className={styles["pagination-button__arrow"]}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </Button>
  );
};

export default PaginationButton;
