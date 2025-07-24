// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import * as ActiveStorage from "@rails/activestorage";
import "channels";

// Bootstrap の JavaScript 機能を読み込む
import "bootstrap";

// Stylesheetsを読み込む（Bootstrap含む）
import "../stylesheets/application";

// Flatpickr を読み込む
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";
import { Japanese } from "flatpickr/dist/l10n/ja.js";  // ← 日本語ロケールを追加

// Rails 標準のライブラリを初期化
Rails.start();
Turbolinks.start();
ActiveStorage.start();

document.addEventListener('turbolinks:load', () => {
  // 📆 Flatpickr の初期化（日本語対応）
  flatpickr(".datepicker", {
    altInput: true,
    altFormat: "Y/m/d",
    dateFormat: "Y-m-d",
    locale: Japanese,
    enableTime: false   // 時間も選びたい場合は true に
  });

  // 🗑️ 削除モーダルの動的 action 設定
  const deleteModal = document.getElementById('deleteModal');
  if (deleteModal) {
    deleteModal.addEventListener('show.bs.modal', event => {
      // モーダルを開くきっかけとなったボタン要素
      const button = event.relatedTarget;
      if (!button) return;

      // ボタンの data-delete-url 属性から削除先URLを取得
      const deleteUrl = button.getAttribute('data-delete-url');
      if (!deleteUrl) return;

      // モーダル内のフォームに削除先URLをセット
      const form = deleteModal.querySelector('#delete-form');
      if (form) {
        form.setAttribute('action', deleteUrl);
      }
    });
  }
});



