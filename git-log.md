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
! [rejected]        master -> master (fetch first) 
//https://blog.csdn.net/mp624183768/article/details/84979850
    git fetch
    git merge
    git branch -vv
    git config --lis
    git push
There is no tracking information for the current branch.
Please specify which branch you want to merge with    
https://www.jianshu.com/p/eaaba8dc3ab3
    git branch --set-upstream-to=origin/master master   //关联本地和远程分支
fatal: refusing to merge unrelated histories
https://blog.csdn.net/u012145252/article/details/80628451
    git pull origin master --allow-unrelated-histories
    