function exampleOnClick(btn) {

   let name = btn.innerHTML;
 
    let theModal = footerContent.find( function(footerContent){
        return footerContent.name === name;
    })

     let modalHeader = theModal.modalHeader;
     let modalBody = theModal.modalBody;   
 
     let exampleModal = getExampleModal();

    if (!exampleModal) { exampleModal = initExampleModal() }

let html =   
`
          <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">${modalHeader}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <div class="modal-body">
          ${modalBody}
          </div>
          <div class="modal-footer">
              <button type="button" class="btn" id="modalBtn" data-dismiss="modal">Close</button>
              
          </div>`;

setExampleModalContent(html);

jQuery(exampleModal).modal('show');
}

function getExampleModal() {
    return document.getElementById('exampleModal');
}

function setExampleModalContent(html){
    getExampleModal().querySelector('.modal-content').innerHTML = html;
}

function initExampleModal() {
    let modal = document.createElement('div');
    modal.classList.add('modal', 'fade');
    modal.setAttribute('id', 'exampleModal');
    modal.setAttribute('tabindex', '-1');
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-labelledby', 'exampleModalLabel');
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = `
    <div class="modal-dialog" role="document">
    <div class="modal-content"></div>
    </div>`;
    document.body.appendChild(modal);
    return modal;

}










