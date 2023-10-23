// Upload.jsx
import React from 'react';

const Upload = () => {
  return (
    <><form action method="post">
  
    <h1><strong>File upload</strong> for PicPerfect</h1>
    
    <div class="form-group">
      <label for="title">Title <span>Give a title for your picture.</span></label>
      <input type="text" name="title" id="title" class="form-controll"/>
    </div>
    <div class="form-group">
      <label for="caption">Caption <span>A descriptive caption works fine.</span></label>
      <input type="text" name="caption" id="caption" class="form-controll"/>
    </div>
    
    <div class="form-group file-area">
          <label for="images">Images <span>Your images should be at least 400x300 wide.</span></label>
      <input type="file" name="images" id="images" required="required" multiple="multiple"/>
      <div class="file-dummy">
        <div class="success">Great, your files are selected. Keep on.</div>
        <div class="default">Please select some files</div>
      </div>
    </div>
    
    <div class="form-group">
      <button type="submit">Upload images</button>
    </div>
    
  </form>
  
  <link href='https://fonts.googleapis.com/css?family=Lato:100,200,300,400,500,600,700' rel='stylesheet' type='text/css'></link>
    </>
  );
}

export default Upload;
