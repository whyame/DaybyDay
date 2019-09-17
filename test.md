### git test
    git config --global user.name "xxxx"
    git config --global user.email "xxxx"
    git init
    git status
    git remote add origin git@github.com:whyame/notebook.git
    git add .
    git status
    git commit -m "First Step"
    git push -u origin master
! [rejected]        master -> master (fetch first) //https://blog.csdn.net/mp624183768/article/details/84979850
    git fetch
