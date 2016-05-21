/*NOT REAL CODE JUST AN NOT GOOD THOUGHTS ABOUT THE TASK*/

function KindOfMagic() {
    
    var json = {//DO MAGIC HERE & GET JSON}; 
    
    json.diffs.each { 
            var methodName = v.diff;
                
            switch (methodName) {
                    //MethodSignatureDiff, подсвечиваем новое имя
                case "MethodSignatureDiff":
                    string delimeter = v.diffs.newName.value;
                    $("newText").blast({ search: delimeter });
                    break;
                    
                    //MethodInitializationDiff, подсвечиваем methodName и newArgs (?)
                case "MethodInitializationDiff":
                    string delimeter = v.diffs.methodName.value + v.diffs.newArgs.value;
                    $("newText").blast({ search: delimeter });       
                    break;
                    
                    //FileDeletedClassDiff, подсвечиваем в старом коде className
                case "FileDeletedClassDiff":
                     String delimeter = v.diffs.className.value;
                    $("newText").blast({ search: delimeter });       
                    break;          
            
                    //AccessDiff, подсвечиваем name, accessModif
                case "AccessDiff":
                     String delimeter = v.diffs.name.value + v.diffs.accessModif.value;
                    $(newText).blast({ search: delimeter });         
                    break;
        
                    //NamespaceDiff, подсвечиваем className и newNamespace
                case "NamespaceDiff":
                     String delimeter = v.diffs.className.value + v.diffs.newNamespace.value;
                    $("newText").blast({ search: delimeter });       
                    break;           
            
                    //MethodSymanticDiff, подсвечиваем className и name
                case "MethodSymanticDiff":
                    String delimeter = v.diffs.className.value + v.diffs.name.value;
                    $("newText").blast({ search: delimeter });       
                    break;
            
                case default:
                    alert("OOPS ITS NOT ALLOWED DIFF SIGNATURE!");
                    break;
            }
      } 
    }
}