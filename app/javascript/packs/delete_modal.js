document.addEventListener('DOMContentLoaded', () => {
  const deleteModal = document.getElementById('deleteModal');
  const deleteForm = document.getElementById('delete-form');

  // Bootstrap の modal イベントを利用
  deleteModal.addEventListener('show.bs.modal', (event) => {
    const button = event.relatedTarget; // モーダルを開いたボタン
    const deleteUrl = button.getAttribute('data-delete-url');

    if (deleteForm && deleteUrl) {
      deleteForm.setAttribute('action', deleteUrl);
    }
  });
});
