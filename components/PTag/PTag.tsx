import { PtagProps } from "./PTag.props";
import cn from "classnames";
import styles from "./PTag.module.css";

export const Ptag = ({
  size = "m",
  children,
  className,
  ...props
}: PtagProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.s]: size == "s",
        [styles.m]: size == "m",
        [styles.l]: size == "l",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
