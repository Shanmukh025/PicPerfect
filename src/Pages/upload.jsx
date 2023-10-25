import React from 'react';
import './upload.css';

const Upload = () => {
  return (
    <>
    <div className="upload-body">
    <form action="" method="post">
        <h1>
          <strong>PicPerfect</strong> Image Uploader.
        </h1>

        <div className="form-group">
          <label htmlFor="title">
            Give a Title <span>Give a title for your picture.</span>
          </label>
          <input type="text" name="title" id="title" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="caption">
            Give a Caption <span>A  caption works fine.</span>
          </label>
          <input type="text" name="caption" id="caption" className="form-control" />
        </div>

        <div className="form-group file-area">
          <label htmlFor="images">
            Select Image <span>Should be atleast 300x300 wide.</span>
          </label>
          <input
            type="file"
            name="images"
            id="images"
            required
            multiple
            className="form-control"
          />
          <div className="file-dummy">
            <div className="success">Great, your photo is uploaded.</div>
            <div className="default">Select a photo</div>
          </div>
        </div>

        <div className="form-group">
          <button type="submit">Upload Image!</button>
        </div>
      </form>

      <link
        href="https://fonts.googleapis.com/css?family=Lato:100,200,300,400,500,600,700"
        rel="stylesheet"
        type="text/css"
      />
    </div>
    </>
  );
};

export default Upload;
