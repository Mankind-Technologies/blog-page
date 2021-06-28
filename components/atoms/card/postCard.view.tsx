import {Card} from "antd";
import Link from "next/link";
import {Post} from "../../../content/types";
import styles from "./postCard.module.css";

const ContentCard = (props:Post) => {
    const { Meta } = Card;
    const img = props.image ? <img alt={props.title ? props.title : ''} src={props.image}/> : '';
    return (
        <Link href={`/posts/${props.slug}`} key={props.title}>
            <a>
                <Card
                    hoverable
                    className={styles.card}

                >
                    <Meta
                        title={props.title}
                        description={<span>{props.shortDescription}</span>}
                    />
                </Card>
            </a>
        </Link>

    )
}

export default ContentCard;
