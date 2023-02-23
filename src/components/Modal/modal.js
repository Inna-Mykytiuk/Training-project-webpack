import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

export const modal = basicLightbox.create(`
  <div class="modal">
    <h4>Lorem ipsum</h4>
    <p class="text">test modal text</p>
    <button>ok</button>
  </div>
`);
