class Controller {
    static generateListItem(item) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        li.appendChild(a);

        a.href = `#${item}`;
        a.innerHTML = item;
        return li;
    }

    static generateBacktoTop() {
        const a = document.createElement("a");
        a.className = "BacktoTop";
        a.href = `#HomeContainer`;
        a.innerHTML = "Back to Top";
        return a;
    }

    static generateDirectory() {
        const myDirectoryContainer = document.querySelector("#DirectoryContainer");
        myDirectoryContainer.innerHTML = "";
        const h3List = document.querySelectorAll("h3");
        for (let i = 0; i < h3List.length; i++) {
            const h3 = h3List[i];
            h3.id = h3.innerHTML;
            if (i !== 0) {
                h3.parentNode.insertBefore(Controller.generateBacktoTop(), h3);
            }
            const li = Controller.generateListItem(h3.innerHTML);
            myDirectoryContainer.appendChild(li);
        }
    }
}
Controller.generateDirectory();