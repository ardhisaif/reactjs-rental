# Home Page
![alt text](https://github.com/ardhisaif/reactjs-rental/public/home.png?raw=true)

# DOM & Virtual DOM
### DOM(Document Object Model)
- Adalah interface yang memungkinkan developer memanipulasi halaman web dari segi struktur, tampilan, dan kontennya.
- DOM melakukannya dengan cara mengambil, mengubah, menambah, maupun menghapus elemen HTML

### Virtual DOM
-  Sebuah konsep dalam pemrograman di mana representasi ideal atau `virtual` dari antarmuka pengguna disimpan dalam memori dan disinkronkan dengan DOM “yang sebenarnya” oleh library seperti ReactDOM
- setiap perubahan terhadap struktur dokumen tidak terjadi secara langsung pada permukaan browser, akan tetapi terjadi di dalam memory. Sehingga proses menjadi lebih cepat.

<br/>
<br/>

# Class & Functional Component

### React Component
- Campuran dari JavaScript dan fragmen HTML yang mengembalikan (HTML).
- JavaScript menyediakan logika bisnis dan memungkinkan pembuatan HTML yang benar untuk dimasukkan ke dalam DOM. 


### Functional Component
fungsi JavaScript biasa yang mengembalikan JSX

```jsx
function WelcomeMessage() {
  return (
    <p>Hello, World</p>
  )
}
export default WelcomeMessage;
```

### Class Component
harus membuat class yang extends `react.component`. JSX yang akan dirender akan dikembalikan di dalam metode render.

```jsx
import React, { Component } from "react";

class ClassComponent extends Component {
 render() {
   return <h1>Hello, world</h1>;
 }
}
```
<br/>
<br/>
<br/>

# React Hooks
Hooks memungkinkan Anda menggunakan state dan fitur React lainnya tanpa membuat sebuah kelas.

```jsx
import React, { useState } from 'react';

function Example() {
  // Deklarasi sebuah variabel state baru, dimana akan dinamakan "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Anda klik sebanyak {count} kali</p>
      <button onClick={() => setCount(count + 1)}>
        Klik saya
      </button>
    </div>
  );
}
//useState merupakan Hook
```