freq = {}
list = []
res = ''
output = ''
string = "aaaeefddnne"

function tree(left,right,data){
        this.left=left
        this.right=right
        this.data=data
        }

function frequency(string){
    for (var c in string){
        if (string[c] in freq){
            freq[string[c]] =freq[string[c]]+1}
        else  
            freq[string[c]]= 0}
    }

function toTree(list){
    a = []
    for (var i in list){
        a.push(new tree(null,null,list[i]))
        }
    while (a.length>1){
        lft = a.pop()
        rgt = a.pop()
        dat = [lft.data[0]+rgt.data[0],lft.data[1]+rgt.data[1]]
        a.push(new tree(lft,rgt,dat))
        a.sort(function(c,freq){return freq.data[1]-c.data[1]})
        }
    p = a.pop()
    return p
    }

function encode(p,ch){
        code = [] 
        while (ch!=p.data[0]){ 
             if (p.left.data[0].indexOf(ch)!=-1){
                  code.push('0')
                  p=p.left}
             else if (p.right.data[0].indexOf(ch)!=-1){
                  code.push('1')
                  p=p.right}  
             }
        return code.join('')
        }

function decode(res,p){
    temp = p
    input = ''
    for (var i in res){
        if (res[i] == "1"){
            p = p.right}
        else if (res[i] == "0"){
            p = p.left}
        if (p.left == null || p.right == null){
            input = input + p.data[0] 
            p = temp}
        }
    return input
    }

function huffman(){
    frequency(string)
    for (var key in freq){
        list.push([key,freq[key]])          
        }
    list.sort(function(a,b){return b[1]-a[1]})
    toTree(list)
    for(var c in string){
        res1 = encode(p,string[c])
        toString(res1)
        res=res+res1 
        }   
    console.log("Huffman encoded string is:",res)
        output = decode(res ,p)
    console.log ("The decoded output is:",output)
    }

huffman()
