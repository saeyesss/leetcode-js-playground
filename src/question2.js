 document.addEventListener("DOMContentLoaded", function () {
        const phoneInput = document.getElementById("phone");

        phoneInput.addEventListener("input", function () {
          const input = this.value.replace(/\D/g, "").substring(0, 10);
          const firstPart = input.substring(0, 3);
          const middlePart = input.substring(3, 6);
          const lastPart = input.substring(6, 10);
          // keep track of old position of the cursor
          const oldSelectionStart = this.selectionStart;
          const oldLength = this.value.length;

          if (input.length > 6) {
            this.value = `(${firstPart}) ${middlePart}-${lastPart}`;
          } else if (input.length > 3) {
            this.value = `(${firstPart}) ${middlePart}`;
          } else if (input.length > 0) {
            this.value = `(${firstPart}`;
          } else {
            this.value = "";
          }

          const newLength = this.value.length;
          const caretOffset = oldLength - oldSelectionStart;
          const newSelectionStart = newLength - caretOffset;
          this.setSelectionRange(newSelectionStart, newSelectionStart);
        });
      });