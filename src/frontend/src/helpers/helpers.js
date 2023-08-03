export const setToken = (userToken) => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
};

export const destroyToken = () => {
    sessionStorage.removeItem('token');
};

export const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString)
    return userToken
};

// one time: populate DB with tags
let tags = ["Angular","Python","MongoDB","Xcode","React Native","Swift","Node.js","IntelliJ","Rust","Flutter","ASP.NET","Apache Spark","PHPStorm","Ruby","Xamarin","PHP","Assembly","PowerShell","Couchbase","Cassandra","SQLite","Sublime Text","Pandas","C++","Clojure","TextMate","MySQL","Objective-C","Eclipse","Firebase",".NET","Cordova","Oracle","CSS","Django","R","Kotlin","Erlang","Visual Studio Code","F#","Shell","DynamoDB","React.js","SQL","Android Studio","Chef","Komodo","RubyMine","Puppet","Angular.js","Microsoft SQL Server",".NET Core","Notepad++","PyTorch","TensorFlow","Redis","Unreal Engine","Elasticsearch","MariaDB","Light Table","CryEngine","Atom","PyCharm","Ruby on Rails","HTML"," Jupyter","Vue.js","Torch","Other(s)","Express","Vim","Hadoop","Dart","jQuery","Elixir","Visual Studio","Flask","Emacs","RStudio","Drupal","WebAssembly","Ansible","C#","Zend","Bash","JavaScript","Scala","Java","VBA","NetBeans","Coda","C","IPython ","Unity 3D","Spring","Go","Laravel","PostgreSQL","TypeScript","Verse"]
export const populateTags = () => {
    let tagArray = [];
    tags.forEach((tag) => tagArray.push(new Object({name: tag})));
    return tagArray
};