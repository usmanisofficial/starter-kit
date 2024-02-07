(function(){const r=document.querySelector("#dealDuration");r&&r.flatpickr({mode:"range"}),window.Helpers.initCustomOptionCheck();const a=document.querySelector("#wizard-create-deal");if(typeof a!==void 0&&a!==null){const t=a.querySelector("#wizard-create-deal-form"),s=t.querySelector("#deal-type"),d=t.querySelector("#deal-details"),c=t.querySelector("#deal-usage"),u=t.querySelector("#review-complete"),m=[].slice.call(t.querySelectorAll(".btn-next")),p=[].slice.call(t.querySelectorAll(".btn-prev"));let e=new Stepper(a,{linear:!0});const l=FormValidation.formValidation(s,{fields:{dealAmount:{validators:{notEmpty:{message:"Please enter amount"},numeric:{message:"The amount must be a number"}}},dealRegion:{validators:{notEmpty:{message:"Please select region"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap5:new FormValidation.plugins.Bootstrap5({eleValidClass:"",rowSelector:".col-sm-6"}),autoFocus:new FormValidation.plugins.AutoFocus,submitButton:new FormValidation.plugins.SubmitButton}}).on("core.form.valid",function(){e.next()}),o=$("#dealRegion");o.length&&(o.wrap('<div class="position-relative"></div>'),o.select2({placeholder:"Select an region",dropdownParent:o.parent()}).on("change",function(){l.revalidateField("dealRegion")}));const g=FormValidation.formValidation(d,{fields:{dealTitle:{validators:{notEmpty:{message:"Please enter deal title"}}},dealCode:{validators:{notEmpty:{message:"Please enter deal code"},stringLength:{min:4,max:10,message:"The deal code must be more than 4 and less than 10 characters long"},regexp:{regexp:/^[A-Z0-9]+$/,message:"The deal code can only consist of capital alphabetical and number"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap5:new FormValidation.plugins.Bootstrap5({eleValidClass:"",rowSelector:".col-sm-6"}),autoFocus:new FormValidation.plugins.AutoFocus,submitButton:new FormValidation.plugins.SubmitButton}}).on("core.form.valid",function(){e.next()}),i=$("#dealOfferedItem");i.length&&(i.wrap('<div class="position-relative"></div>'),i.select2({placeholder:"Select an offered item",dropdownParent:i.parent()}).on("change",function(){}));const w=FormValidation.formValidation(c,{fields:{},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap5:new FormValidation.plugins.Bootstrap5({eleValidClass:"",rowSelector:".col-sm-6"}),autoFocus:new FormValidation.plugins.AutoFocus,submitButton:new FormValidation.plugins.SubmitButton}}).on("core.form.valid",function(){e.next()}),F=FormValidation.formValidation(u,{fields:{},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap5:new FormValidation.plugins.Bootstrap5({eleValidClass:"",rowSelector:".col-md-12"}),autoFocus:new FormValidation.plugins.AutoFocus,submitButton:new FormValidation.plugins.SubmitButton}}).on("core.form.valid",function(){alert("Submitted..!!")});m.forEach(n=>{n.addEventListener("click",f=>{switch(e._currentIndex){case 0:l.validate();break;case 1:g.validate();break;case 2:w.validate();break;case 3:F.validate();break}})}),p.forEach(n=>{n.addEventListener("click",f=>{switch(e._currentIndex){case 3:e.previous();break;case 2:e.previous();break;case 1:e.previous();break}})})}})();
