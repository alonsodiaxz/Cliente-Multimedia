import React, { useState } from "react";
import { Form, Button, Input, Rate } from "antd";
import "./Comments.scss";
import useAuth from "../../hooks/useAuth";
import { postComments } from "../../API/comments";

export default function Comments(props) {
  const { title } = props;
  const { Item } = Form;
  const { TextArea } = Input;
  const [currentValue, setCurrentValue] = useState(2);
  const [commentValue, setCommentValue] = useState("");
  const { user } = useAuth();

  const desc = ["terrible", "mala", "normal", "buena", "fantástica"];

  const onChange = (value) => {
    setCurrentValue(value);
  };

  const onChangeTextArea = (e) => {
    setCommentValue(e.target.value);
  };

  const onSubmit = () => {
    const comment = {
      name: user.name + " " + user.lastname,
      rate: currentValue,
      comment: commentValue,
      film: title,
      likes: 0,
      dislikes: 0,
    };

    postComments(comment)
      .then((response) => {
        console.log(response);
        return response.message;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });

    setCurrentValue(1);
    setCommentValue("");
  };

  return (
    <div className="form-comments">
      <Form layout="horizontal" onSubmitCapture={onSubmit}>
        <Item labelCol={{ span: 1 }} wrapperCol={{ span: 10 }}>
          <h2> Calificar película</h2>
          <h4> Elegir calificación:</h4>
          <Rate tooltips={desc} onChange={onChange} value={currentValue} />
          {currentValue ? (
            <span className="ant-rate-text">{desc[currentValue - 1]}</span>
          ) : (
            ""
          )}
        </Item>
        <Item
          name="bio"
          labelCol={{ span: 1 }}
          wrapperCol={{ span: 12 }}
          rules={[{ required: true }]}
        >
          <h4> Añadir comentario adicional:</h4>
          <TextArea onChange={onChangeTextArea} value={commentValue} />
        </Item>
        <Item wrapperCol={{ offset: 5 }}>
          <Button htmlType="submit" type="primary">
            Añadir
          </Button>
        </Item>
      </Form>
    </div>
  );
}
