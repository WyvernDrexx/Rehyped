import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import { ErrorBlock, SuccessBlock } from "../../stateless";
import api from "../../../api";
import "./AddImages.scss";

const AddImages = props => {
  const [selectedFile, setSelectedFile] = useState({});
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadResponse, setUploadResponse] = useState(null);

  const onInputChange = (target, zone) => {
    setSelectedFile({
      ...selectedFile,
      [zone]: target.files[0]
    });
    console.log(selectedFile);
  };

  const onFileUpload = async (
    route,
    zone
  ) => {
    const fd = new FormData();
    console.log(selectedFile, zone);
    if (!selectedFile || !selectedFile[zone]) return;
    fd.append("image", selectedFile[zone], selectedFile[zone].name);
    setUploadProgress(0);
    await api
      .post(`${route}`, fd, {
        onUploadProgress: progressEvent => {
          setUploadProgress(
            Math.floor((progressEvent.loaded / progressEvent.total) * 100)
          );
        }
      })
      .then(resp => {
        setUploadResponse(resp.data);
      })
      .catch(err => {
        setUploadResponse({
          message: "Error Uploading File!",
          status: 300
        });
      });
  };

  const renderResponse = _ => {
    if (
      uploadResponse &&
      uploadResponse.message &&
      uploadResponse.status === 200
    ) {
      return (
        <div>
          <SuccessBlock message={uploadResponse.message} />
        </div>
      );
    } else if (
      uploadResponse &&
      uploadResponse.message &&
      uploadResponse.status !== 200
    ) {
      return (
        <div>
          <ErrorBlock message={uploadResponse.message} />
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="add-images">
      {renderResponse()}
      <p className="font-weight-bold mb-2 text-danger">{`${props.name}`}</p>
      <form>
        <p className="header text-dark text-left mb-3">MAIN IMAGE</p>
        <ProgressBar className="mb-3" animated now={uploadProgress} />

        <div className="input-group mb-5">
          <div className="custom-file ">
            <input
              type="file"
              onChange={({ target }) => onInputChange(target, "primary")}
              className="custom-file-input "
              id="inputGroupFile04"
            />
            <label
              className="custom-file-label overflow-hidden"
              htmlFor="inputGroupFile04"
            >
              {selectedFile["primary"] ? selectedFile["primary"].name : "Choose file"}
            </label>
          </div>
          <div className="input-group-append">
            <button
              onClick={_ => onFileUpload(`/products/image/upload/${props.id}/0`,"primary")}
              className="btn btn-secondary"
              type="button"
            >
              UPLOAD
            </button>
          </div>
        </div>
      </form>
      <form>
        <p className="header text-dark text-left mb-3">SECONDARY IMAGES</p>

        <div className="input-group mb-1">
          <div className="custom-file ">
            <input
              type="file"
              onChange={({ target }) => onInputChange(target, "secondaryOne")}
              className="custom-file-input "
              id="inputGroupFile04"
            />
            <label
              className="custom-file-label overflow-hidden"
              htmlFor="inputGroupFile04"
            >
              {selectedFile["secondaryOne"]
                ? selectedFile["secondaryOne"].name
                : "Image 1"}
            </label>
          </div>
          <div className="input-group-append">
            <button
              onClick={_ =>
                onFileUpload(`/products/image/upload/${props.id}/1`, "secondaryOne")
              }
              className="btn btn-secondary"
              type="button"
            >
              UPLOAD
            </button>
          </div>
        </div>
        <div className="input-group mb-1">
          <div className="custom-file ">
            <input
              type="file"
              onChange={({ target }) => onInputChange(target, "secondaryTwo")}
              className="custom-file-input "
              id="inputGroupFile04"
            />
            <label
              className="custom-file-label overflow-hidden"
              htmlFor="inputGroupFile04"
            >
              {selectedFile["secondaryTwo"]
                ? selectedFile["secondaryTwo"].name
                : "Image 2"}
            </label>
          </div>
          <div className="input-group-append">
            <button
              onClick={_ =>
                onFileUpload(`/products/image/upload/${props.id}/2`, "secondaryTwo")
              }
              className="btn btn-secondary"
              type="button"
            >
              UPLOAD
            </button>
          </div>
        </div>
        <div className="input-group mb-1">
          <div className="custom-file ">
            <input
              type="file"
              onChange={({ target }) => onInputChange(target, "secondaryThree")}
              className="custom-file-input "
              id="inputGroupFile04"
            />
            <label
              className="custom-file-label overflow-hidden"
              htmlFor="inputGroupFile04"
            >
              {selectedFile["secondaryThree"]
                ? selectedFile["secondaryThree"].name
                : "Image 3"}
            </label>
          </div>
          <div className="input-group-append">
            <button
              onClick={_ =>
                onFileUpload(`/products/image/upload/${props.id}/3`,"secondaryThree")
              }
              className="btn btn-secondary"
              type="button"
            >
              UPLOAD
            </button>
          </div>
        </div>
        <button onClick={props.onClose} className="btn btn-danger mt-2">
          Close
        </button>
      </form>
    </div>
  );
};

export default AddImages;
