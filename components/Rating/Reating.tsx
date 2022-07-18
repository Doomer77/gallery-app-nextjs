import { RatingProps } from "./Rating.props";
import cn from "classnames";
import styles from "./Rating.module.css";
import { useEffect, useState, KeyboardEvent } from "react";
import StarIcon from "./star.svg";

export const Reating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArrey, setRatingArrey] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updateArrey = ratingArrey.map((r: JSX.Element, i: number) => {
      return (
        <span
          key={i}
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.iseditable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(i + 1)}
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
              isEditable && handleSpace(i + 1, e)
            }
          />
        </span>
      );
    });
    setRatingArrey(updateArrey);
  };

  const changeDisplay = (ratingItem: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(ratingItem);
  };

  const onClick = (ratingItem: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(ratingItem);
  };

  const handleSpace = (ratingItem: number, e: KeyboardEvent<SVGAElement>) => {
    if (e.code != "Space" || !setRating) {
      return;
    }
    setRating(ratingItem);
  };

  return (
    <div {...props}>
      {ratingArrey.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
