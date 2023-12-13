import { Tag } from "../design-system/Tag";
import { Typography } from "../design-system/Typography";

interface SynopsisProps {
  title: string;
  director: string[];
  casting: string[];
  genres: string[];
  synopsis: string;
  date: Date;
}

export default function Synopsis(data: SynopsisProps) {
  return (
    <>
      <div className="flex flex-col bg-whitePrimary p-30 rounded-40 w-full gap-5">
        <div className="flex gap-5 w-full">
          <Tag bgColor="white">{/*date*/}</Tag>
          <Tag bgColor="black">{/*date*/}</Tag>
        </div>

        <div className="leading-none">
          <Typography
            fontSize="40"
            fontFamily="FranklinBold"
            textColor="black"
            uppercase
            className="text-center"
          >
            {data.title}
          </Typography>
          <Typography
            fontSize="20"
            fontFamily="FranklinBold"
            textColor="black"
            uppercase
            className="text-center"
          >
            by {data.director.join(", ")}
          </Typography>
        </div>

        <div className="flex flex-col gap-8">
          <Typography
            fontSize="32"
            fontFamily="FranklinBold"
            textColor="black"
            uppercase
          >
            Avec {data.casting.join(", ")}
          </Typography>
          <div className="flex gap-5">
            {data.genres.map((genre) => (
              <Tag bgColor="black" rounded={false}>
                {genre}
              </Tag>
            ))}
          </div>
          <Typography fontSize="20" fontFamily="Franklin" textColor="black">
            {data.synopsis}
          </Typography>
        </div>
      </div>
    </>
  );
}
