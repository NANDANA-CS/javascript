a = []
while (true) {
    i = Number(prompt("1. Add Data\n2. Show Data\n3. Edit Data\n4. Remove Data\n5. Exit\n Select an option:"))
    if (i == 1) { 
        data = prompt("Enter data:")
        if (data) { 
            a.push(data)
        } else {
            alert("No data entered")
        }
    } 
    else if (i == 2) { 
        if (a.length == 0) {
            alert("No data available.")
        } else {
            alert("Your data:\n" + a.join(" "))
        }
    } 
    else if (i == 3) { 
        d = Number(prompt("Enter number to edit (1 to " + a.length + "):"))
        if (d >= 1 && d <= a.length) {
            newData = prompt("Enter new data:")
            if (newData) {
                a[d - 1] = newData
            } else {
                alert("No data entered")
            }
        } else {
            alert("Invalid choice.")
        }
    } 
    else if (i == 4) { 
        let d = Number(prompt("Enter number to remove (1 to " + a.length + "):"))
        if (d >= 1 && d <= a.length) {
            a.splice(d - 1, 1)
        } else {
            alert("Invalid choice")
        }
    } 
    else if (i  == 5) { 
        break
    } 
    else { 
        alert("Invalid choice! Please enter a valid option.")
    }
}
