local time_before_close = 1000000

RegisterNetEvent("SonoranCAD::civint:DisplayID")
AddEventHandler("SonoranCAD::civint:DisplayID", function(imgUrl, target, fullName, dob)
  SendNUIMessage({
    type = "SonoranCAD::civint:id",
    show = true,
    img = imgUrl,
    fullName = fullName,
    dob = dob,
    playerID = target
  })
end)