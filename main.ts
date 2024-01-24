import { Preview } from '@creatomate/preview';

import './style.css';

let preview: Preview | undefined;

document.addEventListener('DOMContentLoaded', function() {
  preview = new Preview(document.querySelector('#container'), 'player', 'public-7p7n35m68yzvbgrug2gfamfo');

  preview.onReady = async () => {
    await preview.setSource({});
  };
});
