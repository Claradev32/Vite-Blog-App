import { useState } from "react";
import { BlogData, genBlogId } from "./service/BlogData";

export default function Modal(props: { showModal: any; setShowModal: any }) {
  const { showModal, setShowModal } = props;
  const [title, setTitle] = useState("");
  const [coverUrl, setCoverURL] = useState("");
  const [body, setBody] = useState("");
  const [description, setDescription] = useState("");
  const [createdBy, setCreatedBy] = useState("");

  async function handleSubmit(event: {
    [x: string]: any;
    preventDefault: () => void;
  }) {
    event.preventDefault();
    BlogData.push({
      id: genBlogId(),
      title,
      cover: coverUrl,
      body,
      description,
      createdBy,
      dateCreated: new Date(Date.now()).toString().substr(4, 11),
    });
    event.target.reset();
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <div>
      <div className="Modal" style={{ display: showModal ? "block" : "none" }}>
        <span className="close" onClick={handleCloseModal}>
          X
        </span>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              name="name"
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <input
              type="text"
              placeholder="Cover URL"
              name="coverUrl"
              onChange={(e) => setCoverURL(e.target.value)}
            ></input>
            <textarea
              name="body"
              id=""
              placeholder="Write something ..."
              rows={20}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <input
              type="text"
              placeholder="description"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
            ></input>
            <input
              type="text"
              placeholder="createdBy"
              name="createdBy"
              onChange={(e) => setCreatedBy(e.target.value)}
            ></input>
            <button>Save</button>
          </form>
        </div>
      </div>
    </div>
  );
}
