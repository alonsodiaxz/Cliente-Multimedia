import React, { useEffect, useState } from "react";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import { Button, List, Rate } from "antd";
import useAuth from "../../hooks/useAuth";
import { getComments, updateComments } from "../../API/comments";
import "./Opinions.scss";

export default function Opinions(props) {
  const { title } = props;
  const { user } = useAuth();
  const [commentsFilm, setcommentsFilm] = useState([]);

  useEffect(() => {
    getComments(title)
      .then((response) => {
        setcommentsFilm(response.comments);
        return response.comments;
      })
      .catch((err) => {
        return err.message;
      });
  }, []);

  return (
    <div className="opinions">
      <h1> VALORACIONES</h1>
      <List
        className="comments"
        itemLayout="horizontal"
        dataSource={commentsFilm}
        renderItem={(comment) => (
          <CommentItem
            title={title}
            user={user}
            comment={comment}
          ></CommentItem>
        )}
      />
    </div>
  );
}

function CommentItem(props) {
  const { user, comment } = props;
  console.log(comment);
  const { Item } = List;
  const { Meta } = Item;
  const [likes, setlikes] = useState(comment.likes);
  const [dislikes, setDislikes] = useState(comment.dislikes);

  const addLike = () => {
    setlikes(likes + 1);
    updateComments(comment._id, { likes: likes + 1 })
      .then((response) => {
        return response.message;
      })
      .catch((err) => {
        return err;
      });
  };

  const removeLike = () => {
    setDislikes(dislikes + 1);
    updateComments(comment._id, { dislikes: dislikes + 1 })
      .then((response) => {
        return response.message;
      })
      .catch((err) => {
        return err;
      });
  };

  return (
    <Item
      actions={[
        <Button onClick={addLike} type="primary">
          <LikeOutlined />
        </Button>,
        <span>{likes}</span>,

        <Button onClick={removeLike} type="danger">
          <DislikeOutlined />
        </Button>,
        <span>{dislikes}</span>,
      ]}
    >
      <Meta title={comment.name} description={<Rate value={comment.rate} />} />
      {comment.comment}
    </Item>
  );
}
