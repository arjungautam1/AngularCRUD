import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  studentForm !:FormGroup;


  constructor(private formBuilder : FormBuilder,private api:ApiService,private dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.studentForm=this.formBuilder.group({
      name:['',Validators.required],
      username:['',Validators.required],
      email:['',Validators.required]
    })
   
  }

  addStudent(){
    if(this.studentForm.valid){
      this.api.postStudent(this.studentForm.value)
      .subscribe({
        next:(res)=>{
          alert("Student added")
          this.studentForm.reset();
          this.dialogRef.close();
        },
        error:()=>{
          alert("Error while adding student.")
        }
      })
    }
  }

}
