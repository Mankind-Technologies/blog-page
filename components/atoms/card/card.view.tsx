import styles from "./card.module.css";
import {Card as AntCard} from "antd";
import Link from "next/link";
import {Post} from "../../../content/types";

const ContentCard = (props:Post) => {
    return (
        <Link href={props.slug}>
            <a>
                <AntCard
                    hoverable
                    className={styles.card}
                    cover={
                        props.image
                    }
                >
                    <AntCard.Meta
                        title={props.title}
                        description={<span>
                    {props.shortDescription}
                </span>}
                    />
                </AntCard>
            </a>
        </Link>

    )
}

export default ContentCard;
