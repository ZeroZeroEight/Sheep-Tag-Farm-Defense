udg_TempUnitGroup = nil
udg_FC = __jarray(0)
udg_TempPoint = nil
udg_CancelGroup = nil
udg_Index = 0
udg_StartPoint = {}
udg_Angle = __jarray(0.0)
udg_Missile = {}
udg_DamageSource = {}
udg_Jump = __jarray(false)
udg_Teleportation = __jarray(0)
udg_Distance = __jarray(0.0)
udg_AttackType = {}
udg_DamageMethod = __jarray(0)
udg_ExplodeRadius = __jarray(0.0)
udg_DamageSpecialEffect = __jarray("")
udg_LoopIndex = 0
udg_DamageSpecialEffectLocation = __jarray("")
udg_CollisionRadius = __jarray(0.0)
udg_Damage = __jarray(0.0)
udg_Targets = __jarray(0)
udg_TargetsAdvanced = __jarray(0)
udg_Drag = __jarray(false)
udg_Link = __jarray(false)
udg_Lightning = __jarray(false)
udg_LightningEffect = {}
udg_Speed = __jarray(0.0)
udg_VerticalArc = __jarray(0.0)
udg_HorizontalArc = __jarray(0.0)
udg_MissileEffectString = __jarray("")
udg_MissileEffect = {}
udg_MissileSize = __jarray(0.0)
udg_TerrainReaction = __jarray(0)
udg_TreeReaction = __jarray(0)
udg_BoundaryReaction = __jarray(0)
udg_BuildingReaction = __jarray(0)
udg_AfterDestination = __jarray(0)
udg_IndexReseter = 0
udg_AfterLinkDeath = __jarray(0)
udg_TempPoint2 = nil
udg_TempPoint3 = nil
udg_XYZ = __jarray(0.0)
udg_TempGroup = nil
udg_AlreadyHit = {}
udg_TempGroup2 = nil
udg_Sheep = nil
udg_Player = {}
udg_PlayerColor = __jarray("")
udg_ControlBoolean = __jarray(false)
udg_Spirit = nil
udg_RoundInfo = __jarray(0)
udg_NewRoundTimer = nil
udg_RoundTimer = nil
udg_TimeModifier = 0.0
udg_RoundRegion = {}
udg_InitialTimer = nil
udg_Dialog = nil
udg_Button = {}
udg_Revives = __jarray(0)
udg_SaveGroup = nil
udg_String_Round = __jarray("")
udg_Income = __jarray(0)
udg_EscToggle = __jarray(false)
udg_HomingAngle = 0.0
udg_TempGroup3 = nil
udg_IceAngle = __jarray(0.0)
udg_TurnSpeed = 0.0
udg_HomingEffect = {}
udg_RobotTimer = nil
udg_TipString = __jarray("")
udg_Continue = __jarray(0)
udg_StampedeSpeed = __jarray(0.0)
udg_StampedeUnit = {}
udg_TimeLasted = 0.0
udg_SetupString = __jarray("")
udg_SaveString = ""
udg_HomingUnit = nil
udg_TempPoint4 = nil
udg_XHashtable = nil
udg_TempUnit = nil
udg_BladeGroup = nil
udg_TempInt = 0
udg_Host = nil
udg_HasBounced = __jarray(false)
udg_TempReal = 0.0
udg_Upgrades = __jarray(0)
udg_TempReal2 = 0.0
udg_TempPlayer = nil
udg_TempUnitType = 0
udg_TempInt2 = 0
udg_FarmCount = __jarray(0)
udg_TempUnit2 = nil
udg_Untitled_Variable_001 = 0
gg_rct_Fence_Zone = nil
gg_rct_Round_1 = nil
gg_rct_Round_2 = nil
gg_rct_Round_3a = nil
gg_rct_Round_3b = nil
gg_rct_Round_4 = nil
gg_rct_Round_5 = nil
gg_rct_Round_6 = nil
gg_rct_Round_7 = nil
gg_rct_Round_8 = nil
gg_rct_Round_9 = nil
gg_rct_Round_10 = nil
gg_rct_Round_11 = nil
gg_rct_Round_12 = nil
gg_rct_Round_13 = nil
gg_rct_Round_14 = nil
gg_rct_Round_15 = nil
gg_rct_Round_16 = nil
gg_rct_Round_17 = nil
gg_rct_Dummy = nil
gg_rct_Entire_Map = nil
gg_unit_n007_0048 = nil
function InitGlobals()
    local i = 0
    udg_TempUnitGroup = CreateGroup()
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_FC[i] = 0
        i = i + 1
    end
    udg_CancelGroup = CreateGroup()
    udg_Index = 0
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_Angle[i] = 0.0
        i = i + 1
    end
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_Jump[i] = false
        i = i + 1
    end
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_Teleportation[i] = 0
        i = i + 1
    end
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_Distance[i] = 0.0
        i = i + 1
    end
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_DamageMethod[i] = 0
        i = i + 1
    end
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_ExplodeRadius[i] = 0.0
        i = i + 1
    end
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_DamageSpecialEffect[i] = ""
        i = i + 1
    end
    udg_LoopIndex = 0
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_DamageSpecialEffectLocation[i] = ""
        i = i + 1
    end
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_CollisionRadius[i] = 0.0
        i = i + 1
    end
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_Damage[i] = 0.0
        i = i + 1
    end
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_Targets[i] = 0
        i = i + 1
    end
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_TargetsAdvanced[i] = 0
        i = i + 1
    end
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_Drag[i] = false
        i = i + 1
    end
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_Link[i] = false
        i = i + 1
    end
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_Lightning[i] = false
        i = i + 1
    end
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_Speed[i] = 0.0
        i = i + 1
    end
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_VerticalArc[i] = 0.0
        i = i + 1
    end
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_HorizontalArc[i] = 0.0
        i = i + 1
    end
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_MissileEffectString[i] = ""
        i = i + 1
    end
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_MissileSize[i] = 0.0
        i = i + 1
    end
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_TerrainReaction[i] = 0
        i = i + 1
    end
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_TreeReaction[i] = 0
        i = i + 1
    end
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_BoundaryReaction[i] = 0
        i = i + 1
    end
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_BuildingReaction[i] = 0
        i = i + 1
    end
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_AfterDestination[i] = 0
        i = i + 1
    end
    udg_IndexReseter = 0
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_AfterLinkDeath[i] = 0
        i = i + 1
    end
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_XYZ[i] = 0.0
        i = i + 1
    end
    udg_TempGroup = CreateGroup()
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_AlreadyHit[i] = CreateGroup()
        i = i + 1
    end
    udg_TempGroup2 = CreateGroup()
    udg_Sheep = CreateForce()
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_PlayerColor[i] = ""
        i = i + 1
    end
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_ControlBoolean[i] = false
        i = i + 1
    end
    udg_Spirit = CreateForce()
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_RoundInfo[i] = 0
        i = i + 1
    end
    udg_NewRoundTimer = CreateTimer()
    udg_RoundTimer = CreateTimer()
    udg_TimeModifier = 1.00
    udg_InitialTimer = CreateTimer()
    udg_Dialog = DialogCreate()
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_Revives[i] = 0
        i = i + 1
    end
    udg_SaveGroup = CreateForce()
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_String_Round[i] = ""
        i = i + 1
    end
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_Income[i] = 0
        i = i + 1
    end
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_EscToggle[i] = false
        i = i + 1
    end
    udg_HomingAngle = 0.0
    udg_TempGroup3 = CreateGroup()
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_IceAngle[i] = 0.0
        i = i + 1
    end
    udg_TurnSpeed = 0.75
    udg_RobotTimer = CreateTimer()
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_TipString[i] = ""
        i = i + 1
    end
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_Continue[i] = 1
        i = i + 1
    end
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_StampedeSpeed[i] = 0.0
        i = i + 1
    end
    udg_TimeLasted = 0.0
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_SetupString[i] = ""
        i = i + 1
    end
    udg_SaveString = ""
    udg_BladeGroup = CreateGroup()
    udg_TempInt = 0
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_HasBounced[i] = false
        i = i + 1
    end
    udg_TempReal = 0.0
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_Upgrades[i] = 0
        i = i + 1
    end
    udg_TempReal2 = 0.0
    udg_TempInt2 = 0
    i = 0
    while (true) do
        if ((i > 1)) then break end
        udg_FarmCount[i] = 0
        i = i + 1
    end
    udg_Untitled_Variable_001 = 0
end

function CreateAllItems()
    local itemID
    BlzCreateItemWithSkin(FourCC("I000"), -3977.2, -3446.2, FourCC("I000"))
    BlzCreateItemWithSkin(FourCC("I000"), -3647.0, -3732.1, FourCC("I000"))
    BlzCreateItemWithSkin(FourCC("I000"), -2968.0, -4031.5, FourCC("I000"))
    BlzCreateItemWithSkin(FourCC("I000"), -3619.2, -4034.9, FourCC("I000"))
    BlzCreateItemWithSkin(FourCC("I001"), -2630.9, -4029.2, FourCC("I001"))
    BlzCreateItemWithSkin(FourCC("I001"), -2334.2, -4022.9, FourCC("I001"))
    BlzCreateItemWithSkin(FourCC("I001"), -3916.7, -4339.6, FourCC("I001"))
    BlzCreateItemWithSkin(FourCC("I001"), -3621.2, -3431.8, FourCC("I001"))
    BlzCreateItemWithSkin(FourCC("I001"), -3334.1, -4329.4, FourCC("I001"))
    BlzCreateItemWithSkin(FourCC("I001"), -4011.2, -3447.4, FourCC("I001"))
    BlzCreateItemWithSkin(FourCC("I001"), -3680.3, -3735.4, FourCC("I001"))
    BlzCreateItemWithSkin(FourCC("I001"), -3910.9, -3712.7, FourCC("I001"))
    BlzCreateItemWithSkin(FourCC("I001"), -3607.5, -4343.0, FourCC("I001"))
    BlzCreateItemWithSkin(FourCC("I002"), -3946.2, -3386.6, FourCC("I002"))
    BlzCreateItemWithSkin(FourCC("I002"), -3621.8, -3994.6, FourCC("I002"))
    BlzCreateItemWithSkin(FourCC("I002"), -3613.9, -3674.6, FourCC("I002"))
    BlzCreateItemWithSkin(FourCC("I002"), -2965.1, -3984.6, FourCC("I002"))
    BlzCreateItemWithSkin(FourCC("I003"), -3906.3, -3982.8, FourCC("I003"))
    BlzCreateItemWithSkin(FourCC("I003"), -2337.4, -3975.4, FourCC("I003"))
    BlzCreateItemWithSkin(FourCC("I003"), -2631.5, -3972.9, FourCC("I003"))
    BlzCreateItemWithSkin(FourCC("I003"), -3591.3, -3371.2, FourCC("I003"))
    BlzCreateItemWithSkin(FourCC("I003"), -3979.9, -3387.8, FourCC("I003"))
    BlzCreateItemWithSkin(FourCC("I003"), -3645.8, -3676.9, FourCC("I003"))
    BlzCreateItemWithSkin(FourCC("I003"), -3916.2, -4293.3, FourCC("I003"))
    BlzCreateItemWithSkin(FourCC("I003"), -3333.6, -4284.8, FourCC("I003"))
    BlzCreateItemWithSkin(FourCC("I003"), -3908.3, -3674.3, FourCC("I003"))
    BlzCreateItemWithSkin(FourCC("I003"), -3607.0, -4296.7, FourCC("I003"))
    BlzCreateItemWithSkin(FourCC("I004"), -2303.1, -3973.2, FourCC("I004"))
    BlzCreateItemWithSkin(FourCC("I005"), -3057.8, -4294.1, FourCC("I005"))
    BlzCreateItemWithSkin(FourCC("I005"), -3367.7, -4292.4, FourCC("I005"))
    BlzCreateItemWithSkin(FourCC("I005"), -3939.7, -3986.0, FourCC("I005"))
    BlzCreateItemWithSkin(FourCC("I005"), -1976.2, -3962.6, FourCC("I005"))
    BlzCreateItemWithSkin(FourCC("I005"), -2013.1, -4311.0, FourCC("I005"))
    BlzCreateItemWithSkin(FourCC("I005"), -3681.0, -3681.5, FourCC("I005"))
    BlzCreateItemWithSkin(FourCC("I005"), -3948.4, -4297.2, FourCC("I005"))
    BlzCreateItemWithSkin(FourCC("I005"), -2667.8, -3978.6, FourCC("I005"))
    BlzCreateItemWithSkin(FourCC("I005"), -2336.7, -4317.4, FourCC("I005"))
    BlzCreateItemWithSkin(FourCC("I005"), -2371.6, -3980.0, FourCC("I005"))
    BlzCreateItemWithSkin(FourCC("I005"), -3000.2, -3985.5, FourCC("I005"))
    BlzCreateItemWithSkin(FourCC("I005"), -3975.5, -3680.9, FourCC("I005"))
    BlzCreateItemWithSkin(FourCC("I005"), -2697.9, -4318.8, FourCC("I005"))
    BlzCreateItemWithSkin(FourCC("I005"), -3639.2, -4300.6, FourCC("I005"))
    BlzCreateItemWithSkin(FourCC("I005"), -3659.3, -3381.9, FourCC("I005"))
    BlzCreateItemWithSkin(FourCC("I005"), -3653.5, -4002.1, FourCC("I005"))
    BlzCreateItemWithSkin(FourCC("I005"), -4012.2, -3390.4, FourCC("I005"))
    BlzCreateItemWithSkin(FourCC("I005"), -3320.9, -3995.1, FourCC("I005"))
    BlzCreateItemWithSkin(FourCC("I006"), -2302.2, -4020.7, FourCC("I006"))
    BlzCreateItemWithSkin(FourCC("I007"), -3625.1, -3371.5, FourCC("I007"))
    BlzCreateItemWithSkin(FourCC("I008"), -3691.8, -3383.1, FourCC("I008"))
    BlzCreateItemWithSkin(FourCC("I008"), -4010.3, -3992.4, FourCC("I008"))
    BlzCreateItemWithSkin(FourCC("I009"), -3655.6, -3431.8, FourCC("I009"))
    BlzCreateItemWithSkin(FourCC("I009"), -3976.2, -4037.9, FourCC("I009"))
    BlzCreateItemWithSkin(FourCC("I00A"), -3658.9, -3470.2, FourCC("I00A"))
    BlzCreateItemWithSkin(FourCC("I00A"), -4014.8, -4090.9, FourCC("I00A"))
    BlzCreateItemWithSkin(FourCC("I00C"), -3692.4, -3434.6, FourCC("I00C"))
    BlzCreateItemWithSkin(FourCC("I00D"), -3693.6, -3470.2, FourCC("I00D"))
    BlzCreateItemWithSkin(FourCC("I00E"), -3941.8, -3678.4, FourCC("I00E"))
    BlzCreateItemWithSkin(FourCC("I00F"), -3978.7, -3783.2, FourCC("I00F"))
    BlzCreateItemWithSkin(FourCC("I00G"), -3946.8, -3714.2, FourCC("I00G"))
    BlzCreateItemWithSkin(FourCC("I00H"), -3367.7, -4335.5, FourCC("I00H"))
    BlzCreateItemWithSkin(FourCC("I00H"), -1976.1, -4020.8, FourCC("I00H"))
    BlzCreateItemWithSkin(FourCC("I00H"), -3002.4, -4032.7, FourCC("I00H"))
    BlzCreateItemWithSkin(FourCC("I00H"), -2370.2, -4025.4, FourCC("I00H"))
    BlzCreateItemWithSkin(FourCC("I00H"), -3651.6, -4038.1, FourCC("I00H"))
    BlzCreateItemWithSkin(FourCC("I00H"), -3611.5, -3729.3, FourCC("I00H"))
    BlzCreateItemWithSkin(FourCC("I00H"), -2692.6, -4360.3, FourCC("I00H"))
    BlzCreateItemWithSkin(FourCC("I00H"), -2336.8, -4358.8, FourCC("I00H"))
    BlzCreateItemWithSkin(FourCC("I00H"), -3048.9, -4341.5, FourCC("I00H"))
    BlzCreateItemWithSkin(FourCC("I00H"), -3640.4, -4345.6, FourCC("I00H"))
    BlzCreateItemWithSkin(FourCC("I00H"), -2013.1, -4352.4, FourCC("I00H"))
    BlzCreateItemWithSkin(FourCC("I00H"), -2664.4, -4032.0, FourCC("I00H"))
    BlzCreateItemWithSkin(FourCC("I00H"), -3983.1, -3723.3, FourCC("I00H"))
    BlzCreateItemWithSkin(FourCC("I00H"), -3949.6, -4342.1, FourCC("I00H"))
    BlzCreateItemWithSkin(FourCC("I00H"), -4011.1, -4044.0, FourCC("I00H"))
    BlzCreateItemWithSkin(FourCC("I00H"), -3319.8, -4044.5, FourCC("I00H"))
    BlzCreateItemWithSkin(FourCC("I00I"), -1979.3, -4079.6, FourCC("I00I"))
    BlzCreateItemWithSkin(FourCC("I00I"), -2665.9, -4081.7, FourCC("I00I"))
    BlzCreateItemWithSkin(FourCC("I00I"), -3009.0, -4079.0, FourCC("I00I"))
    BlzCreateItemWithSkin(FourCC("I00I"), -2696.8, -4396.1, FourCC("I00I"))
    BlzCreateItemWithSkin(FourCC("I00I"), -2011.6, -4390.9, FourCC("I00I"))
    BlzCreateItemWithSkin(FourCC("I00I"), -2335.2, -4397.4, FourCC("I00I"))
    BlzCreateItemWithSkin(FourCC("I00I"), -3318.7, -4091.9, FourCC("I00I"))
    BlzCreateItemWithSkin(FourCC("I00I"), -3049.6, -4387.0, FourCC("I00I"))
    BlzCreateItemWithSkin(FourCC("I00I"), -3638.0, -4388.0, FourCC("I00I"))
    BlzCreateItemWithSkin(FourCC("I00I"), -3650.3, -4081.7, FourCC("I00I"))
    BlzCreateItemWithSkin(FourCC("I00I"), -3369.2, -4380.4, FourCC("I00I"))
    BlzCreateItemWithSkin(FourCC("I00I"), -3947.2, -4384.5, FourCC("I00I"))
    BlzCreateItemWithSkin(FourCC("I00I"), -2370.6, -4071.6, FourCC("I00I"))
    BlzCreateItemWithSkin(FourCC("I00J"), -3975.9, -3987.6, FourCC("I00J"))
    BlzCreateItemWithSkin(FourCC("I00K"), -3942.9, -4039.4, FourCC("I00K"))
    BlzCreateItemWithSkin(FourCC("I00L"), -3980.7, -4083.4, FourCC("I00L"))
    BlzCreateItemWithSkin(FourCC("I00M"), -3285.5, -4039.4, FourCC("I00M"))
    BlzCreateItemWithSkin(FourCC("I00N"), -3282.3, -3989.8, FourCC("I00N"))
    BlzCreateItemWithSkin(FourCC("I00O"), -3251.6, -4037.3, FourCC("I00O"))
    BlzCreateItemWithSkin(FourCC("I00P"), -3247.8, -3985.4, FourCC("I00P"))
    BlzCreateItemWithSkin(FourCC("I00Q"), -3248.4, -4084.3, FourCC("I00Q"))
    BlzCreateItemWithSkin(FourCC("I00R"), -2931.7, -4031.5, FourCC("I00R"))
    BlzCreateItemWithSkin(FourCC("I00S"), -2930.5, -3984.6, FourCC("I00S"))
    BlzCreateItemWithSkin(FourCC("I00T"), -2972.8, -4074.7, FourCC("I00T"))
    BlzCreateItemWithSkin(FourCC("I00U"), -2632.7, -4076.2, FourCC("I00U"))
    BlzCreateItemWithSkin(FourCC("I00V"), -2599.8, -3965.8, FourCC("I00V"))
    BlzCreateItemWithSkin(FourCC("I00W"), -2592.7, -4022.3, FourCC("I00W"))
    BlzCreateItemWithSkin(FourCC("I00Y"), -1941.6, -3955.9, FourCC("I00Y"))
    BlzCreateItemWithSkin(FourCC("I00Z"), -1942.7, -4021.1, FourCC("I00Z"))
    BlzCreateItemWithSkin(FourCC("I010"), -1945.9, -4077.0, FourCC("I010"))
    BlzCreateItemWithSkin(FourCC("I011"), -1907.2, -3953.0, FourCC("I011"))
    BlzCreateItemWithSkin(FourCC("I012"), -1908.6, -4021.7, FourCC("I012"))
    BlzCreateItemWithSkin(FourCC("I013"), -3914.8, -4382.0, FourCC("I013"))
    BlzCreateItemWithSkin(FourCC("I014"), -3881.5, -4289.3, FourCC("I014"))
    BlzCreateItemWithSkin(FourCC("I015"), -3883.8, -4337.1, FourCC("I015"))
    BlzCreateItemWithSkin(FourCC("I016"), -3336.2, -4377.4, FourCC("I016"))
    BlzCreateItemWithSkin(FourCC("I017"), -3298.3, -4283.0, FourCC("I017"))
    BlzCreateItemWithSkin(FourCC("I018"), -3299.4, -4329.4, FourCC("I018"))
    BlzCreateItemWithSkin(FourCC("I019"), -3265.4, -4278.3, FourCC("I019"))
    BlzCreateItemWithSkin(FourCC("I01A"), -3300.4, -4373.0, FourCC("I01A"))
    BlzCreateItemWithSkin(FourCC("I01B"), -3265.6, -4323.3, FourCC("I01B"))
    BlzCreateItemWithSkin(FourCC("I01E"), -3024.3, -4288.1, FourCC("I01E"))
    BlzCreateItemWithSkin(FourCC("I01F"), -3014.2, -4339.8, FourCC("I01F"))
    BlzCreateItemWithSkin(FourCC("I01G"), -3013.8, -4383.7, FourCC("I01G"))
    BlzCreateItemWithSkin(FourCC("I01H"), -2656.4, -4357.0, FourCC("I01H"))
    BlzCreateItemWithSkin(FourCC("I01I"), -2664.5, -4312.0, FourCC("I01I"))
    BlzCreateItemWithSkin(FourCC("I01J"), -2657.9, -4392.9, FourCC("I01J"))
    BlzCreateItemWithSkin(FourCC("I01K"), -2620.7, -4393.5, FourCC("I01K"))
    BlzCreateItemWithSkin(FourCC("I01L"), -2629.7, -4311.6, FourCC("I01L"))
    BlzCreateItemWithSkin(FourCC("I01M"), -2621.8, -4356.6, FourCC("I01M"))
    BlzCreateItemWithSkin(FourCC("I01N"), -3285.5, -4084.3, FourCC("I01N"))
    BlzCreateItemWithSkin(FourCC("I01O"), -2587.2, -4352.9, FourCC("I01O"))
    BlzCreateItemWithSkin(FourCC("I01P"), -2595.5, -4307.2, FourCC("I01P"))
    BlzCreateItemWithSkin(FourCC("I01Q"), -2587.5, -4393.8, FourCC("I01Q"))
    BlzCreateItemWithSkin(FourCC("I01S"), -2332.1, -4062.2, FourCC("I01S"))
    BlzCreateItemWithSkin(FourCC("I01T"), -2300.8, -4393.8, FourCC("I01T"))
    BlzCreateItemWithSkin(FourCC("I01U"), -2302.7, -4311.7, FourCC("I01U"))
    BlzCreateItemWithSkin(FourCC("I01V"), -2298.2, -4350.1, FourCC("I01V"))
    BlzCreateItemWithSkin(FourCC("I01W"), -2230.1, -4391.2, FourCC("I01W"))
    BlzCreateItemWithSkin(FourCC("I01X"), -2237.5, -4308.9, FourCC("I01X"))
    BlzCreateItemWithSkin(FourCC("I01Y"), -2229.8, -4349.4, FourCC("I01Y"))
    BlzCreateItemWithSkin(FourCC("I01Z"), -2269.9, -4308.8, FourCC("I01Z"))
    BlzCreateItemWithSkin(FourCC("I020"), -2263.0, -4353.5, FourCC("I020"))
    BlzCreateItemWithSkin(FourCC("I021"), -2262.2, -4390.3, FourCC("I021"))
    BlzCreateItemWithSkin(FourCC("I023"), -1906.3, -4074.3, FourCC("I023"))
    BlzCreateItemWithSkin(FourCC("I027"), -1978.0, -4345.5, FourCC("I027"))
    BlzCreateItemWithSkin(FourCC("I028"), -1980.3, -4305.5, FourCC("I028"))
    BlzCreateItemWithSkin(FourCC("I029"), -1977.3, -4386.3, FourCC("I029"))
    BlzCreateItemWithSkin(FourCC("I02A"), -1912.2, -4299.9, FourCC("I02A"))
    BlzCreateItemWithSkin(FourCC("I02B"), -1905.6, -4386.3, FourCC("I02B"))
    BlzCreateItemWithSkin(FourCC("I02C"), -1908.9, -4343.7, FourCC("I02C"))
    BlzCreateItemWithSkin(FourCC("I02D"), -1945.4, -4303.6, FourCC("I02D"))
    BlzCreateItemWithSkin(FourCC("I02E"), -1943.3, -4347.2, FourCC("I02E"))
    BlzCreateItemWithSkin(FourCC("I02F"), -1941.3, -4389.9, FourCC("I02F"))
    BlzCreateItemWithSkin(FourCC("I02G"), -1873.3, -4389.7, FourCC("I02G"))
    BlzCreateItemWithSkin(FourCC("I02H"), -1876.1, -4347.7, FourCC("I02H"))
    BlzCreateItemWithSkin(FourCC("I02I"), -1880.2, -4299.1, FourCC("I02I"))
    BlzCreateItemWithSkin(FourCC("I02J"), -3575.3, -4339.3, FourCC("I02J"))
    BlzCreateItemWithSkin(FourCC("I02K"), -3573.6, -4295.6, FourCC("I02K"))
    BlzCreateItemWithSkin(FourCC("I02L"), -3605.9, -4387.7, FourCC("I02L"))
end

function CreateUnitsForPlayer0()
    local p = Player(0)
    local u
    local unitID
    local t
    local life
    u = BlzCreateUnitWithSkin(p, FourCC("n007"), -1604.7, 366.4, 240.553, FourCC("n007"))
    u = BlzCreateUnitWithSkin(p, FourCC("n006"), -1478.0, 448.4, 299.936, FourCC("n006"))
    u = BlzCreateUnitWithSkin(p, FourCC("h009"), -1429.6, 58.5, 272.118, FourCC("h009"))
    u = BlzCreateUnitWithSkin(p, FourCC("h00B"), -1410.2, 229.6, 319.064, FourCC("h00B"))
    u = BlzCreateUnitWithSkin(p, FourCC("n00A"), -1473.1, 280.9, 123.809, FourCC("n00A"))
    u = BlzCreateUnitWithSkin(p, FourCC("h008"), -1293.5, 244.1, 261.702, FourCC("h008"))
    u = BlzCreateUnitWithSkin(p, FourCC("h00E"), -1204.2, 133.1, 204.396, FourCC("h00E"))
    u = BlzCreateUnitWithSkin(p, FourCC("h00D"), -1146.3, 405.1, 260.670, FourCC("h00D"))
    u = BlzCreateUnitWithSkin(p, FourCC("u000"), -1646.1, 173.4, 352.782, FourCC("u000"))
    u = BlzCreateUnitWithSkin(p, FourCC("e002"), -1352.3, 454.9, 251.188, FourCC("e002"))
    u = BlzCreateUnitWithSkin(p, FourCC("h00F"), -1600.9, -29.6, 303.957, FourCC("h00F"))
    u = BlzCreateUnitWithSkin(p, FourCC("h00G"), -1812.7, 69.4, 224.447, FourCC("h00G"))
    u = BlzCreateUnitWithSkin(p, FourCC("n008"), -1752.5, 312.8, 33.751, FourCC("n008"))
    u = BlzCreateUnitWithSkin(p, FourCC("n009"), -1470.9, 375.5, 323.096, FourCC("n009"))
end

function CreateNeutralHostile()
    local p = Player(PLAYER_NEUTRAL_AGGRESSIVE)
    local u
    local unitID
    local t
    local life
    u = BlzCreateUnitWithSkin(p, FourCC("E000"), -4102.1, -3426.8, 270.000, FourCC("E000"))
    u = BlzCreateUnitWithSkin(p, FourCC("E003"), -3803.2, -3415.3, 270.000, FourCC("E003"))
    u = BlzCreateUnitWithSkin(p, FourCC("E004"), -4063.8, -3682.9, 270.000, FourCC("E004"))
    u = BlzCreateUnitWithSkin(p, FourCC("n003"), -3750.7, -3690.6, 270.000, FourCC("n003"))
    u = BlzCreateUnitWithSkin(p, FourCC("E007"), -2456.3, -4020.3, 270.000, FourCC("E007"))
    u = BlzCreateUnitWithSkin(p, FourCC("n005"), -4079.8, -4030.2, 270.000, FourCC("n005"))
    u = BlzCreateUnitWithSkin(p, FourCC("n004"), -3751.8, -4020.2, 90.000, FourCC("n004"))
    u = BlzCreateUnitWithSkin(p, FourCC("E00H"), -2076.1, -4343.4, 270.000, FourCC("E00H"))
    u = BlzCreateUnitWithSkin(p, FourCC("E005"), -3415.5, -4028.3, 270.000, FourCC("E005"))
    SetUnitState(u, UNIT_STATE_MANA, 100)
    u = BlzCreateUnitWithSkin(p, FourCC("E006"), -3088.6, -4017.7, 270.000, FourCC("E006"))
    u = BlzCreateUnitWithSkin(p, FourCC("E008"), -2786.4, -4009.9, 270.000, FourCC("E008"))
    SetUnitState(u, UNIT_STATE_MANA, 15)
    u = BlzCreateUnitWithSkin(p, FourCC("E009"), -2093.2, -4013.4, 270.000, FourCC("E009"))
    SetUnitState(u, UNIT_STATE_MANA, 16)
    u = BlzCreateUnitWithSkin(p, FourCC("E00A"), -4041.6, -4328.1, 270.000, FourCC("E00A"))
    u = BlzCreateUnitWithSkin(p, FourCC("E00I"), -3745.2, -4326.3, 270.000, FourCC("E00I"))
    u = BlzCreateUnitWithSkin(p, FourCC("E00C"), -3446.4, -4330.9, 270.000, FourCC("E00C"))
    SetUnitState(u, UNIT_STATE_MANA, 15)
    u = BlzCreateUnitWithSkin(p, FourCC("E00D"), -2797.3, -4334.5, 270.000, FourCC("E00D"))
    SetUnitState(u, UNIT_STATE_MANA, 13)
    u = BlzCreateUnitWithSkin(p, FourCC("E00F"), -3139.8, -4311.0, 270.000, FourCC("E00F"))
    u = BlzCreateUnitWithSkin(p, FourCC("E00G"), -2445.9, -4317.3, 270.000, FourCC("E00G"))
end

function CreatePlayerBuildings()
end

function CreatePlayerUnits()
    CreateUnitsForPlayer0()
end

function CreateAllUnits()
    CreatePlayerBuildings()
    CreateNeutralHostile()
    CreatePlayerUnits()
end

function CreateRegions()
    local we
    gg_rct_Fence_Zone = Rect(-416.0, -512.0, 416.0, 384.0)
    gg_rct_Round_1 = Rect(-4192.0, -3520.0, -3840.0, -3264.0)
    gg_rct_Round_2 = Rect(-3872.0, -3520.0, -3520.0, -3264.0)
    gg_rct_Round_3a = Rect(-4160.0, -3840.0, -3808.0, -3584.0)
    gg_rct_Round_3b = Rect(-3840.0, -3840.0, -3552.0, -3584.0)
    gg_rct_Round_4 = Rect(-4160.0, -4160.0, -3840.0, -3904.0)
    gg_rct_Round_5 = Rect(-3872.0, -4160.0, -3552.0, -3904.0)
    gg_rct_Round_6 = Rect(-3552.0, -4160.0, -3200.0, -3904.0)
    gg_rct_Round_7 = Rect(-3168.0, -4160.0, -2880.0, -3904.0)
    gg_rct_Round_8 = Rect(-2880.0, -4160.0, -2528.0, -3904.0)
    gg_rct_Round_9 = Rect(-2560.0, -4160.0, -2240.0, -3904.0)
    gg_rct_Round_10 = Rect(-2208.0, -4160.0, -1824.0, -3872.0)
    gg_rct_Round_11 = Rect(-4128.0, -4448.0, -3808.0, -4224.0)
    gg_rct_Round_12 = Rect(-3840.0, -4448.0, -3520.0, -4224.0)
    gg_rct_Round_13 = Rect(-3520.0, -4448.0, -3200.0, -4224.0)
    gg_rct_Round_14 = Rect(-3232.0, -4448.0, -2912.0, -4224.0)
    gg_rct_Round_15 = Rect(-2912.0, -4448.0, -2528.0, -4224.0)
    gg_rct_Round_16 = Rect(-2528.0, -4448.0, -2176.0, -4224.0)
    gg_rct_Round_17 = Rect(-2176.0, -4448.0, -1824.0, -4224.0)
    gg_rct_Dummy = Rect(-4128.0, -3104.0, -3968.0, -2976.0)
    gg_rct_Entire_Map = Rect(-4608.0, -4704.0, 4640.0, 4512.0)
end

function InitCustomPlayerSlots()
    SetPlayerStartLocation(Player(0), 0)
    ForcePlayerStartLocation(Player(0), 0)
    SetPlayerColor(Player(0), ConvertPlayerColor(0))
    SetPlayerRacePreference(Player(0), RACE_PREF_HUMAN)
    SetPlayerRaceSelectable(Player(0), false)
    SetPlayerController(Player(0), MAP_CONTROL_USER)
    SetPlayerStartLocation(Player(1), 1)
    ForcePlayerStartLocation(Player(1), 1)
    SetPlayerColor(Player(1), ConvertPlayerColor(1))
    SetPlayerRacePreference(Player(1), RACE_PREF_HUMAN)
    SetPlayerRaceSelectable(Player(1), false)
    SetPlayerController(Player(1), MAP_CONTROL_USER)
    SetPlayerStartLocation(Player(2), 2)
    ForcePlayerStartLocation(Player(2), 2)
    SetPlayerColor(Player(2), ConvertPlayerColor(2))
    SetPlayerRacePreference(Player(2), RACE_PREF_HUMAN)
    SetPlayerRaceSelectable(Player(2), false)
    SetPlayerController(Player(2), MAP_CONTROL_USER)
    SetPlayerStartLocation(Player(3), 3)
    ForcePlayerStartLocation(Player(3), 3)
    SetPlayerColor(Player(3), ConvertPlayerColor(3))
    SetPlayerRacePreference(Player(3), RACE_PREF_HUMAN)
    SetPlayerRaceSelectable(Player(3), false)
    SetPlayerController(Player(3), MAP_CONTROL_USER)
    SetPlayerStartLocation(Player(4), 4)
    ForcePlayerStartLocation(Player(4), 4)
    SetPlayerColor(Player(4), ConvertPlayerColor(4))
    SetPlayerRacePreference(Player(4), RACE_PREF_HUMAN)
    SetPlayerRaceSelectable(Player(4), false)
    SetPlayerController(Player(4), MAP_CONTROL_USER)
    SetPlayerStartLocation(Player(5), 5)
    ForcePlayerStartLocation(Player(5), 5)
    SetPlayerColor(Player(5), ConvertPlayerColor(5))
    SetPlayerRacePreference(Player(5), RACE_PREF_HUMAN)
    SetPlayerRaceSelectable(Player(5), false)
    SetPlayerController(Player(5), MAP_CONTROL_USER)
    SetPlayerStartLocation(Player(6), 6)
    ForcePlayerStartLocation(Player(6), 6)
    SetPlayerColor(Player(6), ConvertPlayerColor(6))
    SetPlayerRacePreference(Player(6), RACE_PREF_HUMAN)
    SetPlayerRaceSelectable(Player(6), false)
    SetPlayerController(Player(6), MAP_CONTROL_USER)
    SetPlayerStartLocation(Player(7), 7)
    ForcePlayerStartLocation(Player(7), 7)
    SetPlayerColor(Player(7), ConvertPlayerColor(7))
    SetPlayerRacePreference(Player(7), RACE_PREF_HUMAN)
    SetPlayerRaceSelectable(Player(7), false)
    SetPlayerController(Player(7), MAP_CONTROL_USER)
    SetPlayerStartLocation(Player(8), 8)
    ForcePlayerStartLocation(Player(8), 8)
    SetPlayerColor(Player(8), ConvertPlayerColor(8))
    SetPlayerRacePreference(Player(8), RACE_PREF_ORC)
    SetPlayerRaceSelectable(Player(8), false)
    SetPlayerController(Player(8), MAP_CONTROL_COMPUTER)
    SetPlayerStartLocation(Player(9), 9)
    ForcePlayerStartLocation(Player(9), 9)
    SetPlayerColor(Player(9), ConvertPlayerColor(9))
    SetPlayerRacePreference(Player(9), RACE_PREF_ORC)
    SetPlayerRaceSelectable(Player(9), false)
    SetPlayerController(Player(9), MAP_CONTROL_COMPUTER)
    SetPlayerStartLocation(Player(10), 10)
    ForcePlayerStartLocation(Player(10), 10)
    SetPlayerColor(Player(10), ConvertPlayerColor(10))
    SetPlayerRacePreference(Player(10), RACE_PREF_ORC)
    SetPlayerRaceSelectable(Player(10), false)
    SetPlayerController(Player(10), MAP_CONTROL_COMPUTER)
    SetPlayerStartLocation(Player(11), 11)
    ForcePlayerStartLocation(Player(11), 11)
    SetPlayerColor(Player(11), ConvertPlayerColor(11))
    SetPlayerRacePreference(Player(11), RACE_PREF_ORC)
    SetPlayerRaceSelectable(Player(11), false)
    SetPlayerController(Player(11), MAP_CONTROL_COMPUTER)
end

function InitCustomTeams()
    SetPlayerTeam(Player(0), 0)
    SetPlayerState(Player(0), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerTeam(Player(1), 0)
    SetPlayerState(Player(1), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerTeam(Player(2), 0)
    SetPlayerState(Player(2), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerTeam(Player(3), 0)
    SetPlayerState(Player(3), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerTeam(Player(4), 0)
    SetPlayerState(Player(4), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerTeam(Player(5), 0)
    SetPlayerState(Player(5), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerTeam(Player(6), 0)
    SetPlayerState(Player(6), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerTeam(Player(7), 0)
    SetPlayerState(Player(7), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(2), true)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(4), true)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(5), true)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(6), true)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(7), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(2), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(4), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(5), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(6), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(7), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(4), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(5), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(6), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(7), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(2), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(4), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(5), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(6), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(7), true)
    SetPlayerAllianceStateAllyBJ(Player(4), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(4), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(4), Player(2), true)
    SetPlayerAllianceStateAllyBJ(Player(4), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(4), Player(5), true)
    SetPlayerAllianceStateAllyBJ(Player(4), Player(6), true)
    SetPlayerAllianceStateAllyBJ(Player(4), Player(7), true)
    SetPlayerAllianceStateAllyBJ(Player(5), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(5), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(5), Player(2), true)
    SetPlayerAllianceStateAllyBJ(Player(5), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(5), Player(4), true)
    SetPlayerAllianceStateAllyBJ(Player(5), Player(6), true)
    SetPlayerAllianceStateAllyBJ(Player(5), Player(7), true)
    SetPlayerAllianceStateAllyBJ(Player(6), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(6), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(6), Player(2), true)
    SetPlayerAllianceStateAllyBJ(Player(6), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(6), Player(4), true)
    SetPlayerAllianceStateAllyBJ(Player(6), Player(5), true)
    SetPlayerAllianceStateAllyBJ(Player(6), Player(7), true)
    SetPlayerAllianceStateAllyBJ(Player(7), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(7), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(7), Player(2), true)
    SetPlayerAllianceStateAllyBJ(Player(7), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(7), Player(4), true)
    SetPlayerAllianceStateAllyBJ(Player(7), Player(5), true)
    SetPlayerAllianceStateAllyBJ(Player(7), Player(6), true)
    SetPlayerAllianceStateVisionBJ(Player(0), Player(1), true)
    SetPlayerAllianceStateVisionBJ(Player(0), Player(2), true)
    SetPlayerAllianceStateVisionBJ(Player(0), Player(3), true)
    SetPlayerAllianceStateVisionBJ(Player(0), Player(4), true)
    SetPlayerAllianceStateVisionBJ(Player(0), Player(5), true)
    SetPlayerAllianceStateVisionBJ(Player(0), Player(6), true)
    SetPlayerAllianceStateVisionBJ(Player(0), Player(7), true)
    SetPlayerAllianceStateVisionBJ(Player(1), Player(0), true)
    SetPlayerAllianceStateVisionBJ(Player(1), Player(2), true)
    SetPlayerAllianceStateVisionBJ(Player(1), Player(3), true)
    SetPlayerAllianceStateVisionBJ(Player(1), Player(4), true)
    SetPlayerAllianceStateVisionBJ(Player(1), Player(5), true)
    SetPlayerAllianceStateVisionBJ(Player(1), Player(6), true)
    SetPlayerAllianceStateVisionBJ(Player(1), Player(7), true)
    SetPlayerAllianceStateVisionBJ(Player(2), Player(0), true)
    SetPlayerAllianceStateVisionBJ(Player(2), Player(1), true)
    SetPlayerAllianceStateVisionBJ(Player(2), Player(3), true)
    SetPlayerAllianceStateVisionBJ(Player(2), Player(4), true)
    SetPlayerAllianceStateVisionBJ(Player(2), Player(5), true)
    SetPlayerAllianceStateVisionBJ(Player(2), Player(6), true)
    SetPlayerAllianceStateVisionBJ(Player(2), Player(7), true)
    SetPlayerAllianceStateVisionBJ(Player(3), Player(0), true)
    SetPlayerAllianceStateVisionBJ(Player(3), Player(1), true)
    SetPlayerAllianceStateVisionBJ(Player(3), Player(2), true)
    SetPlayerAllianceStateVisionBJ(Player(3), Player(4), true)
    SetPlayerAllianceStateVisionBJ(Player(3), Player(5), true)
    SetPlayerAllianceStateVisionBJ(Player(3), Player(6), true)
    SetPlayerAllianceStateVisionBJ(Player(3), Player(7), true)
    SetPlayerAllianceStateVisionBJ(Player(4), Player(0), true)
    SetPlayerAllianceStateVisionBJ(Player(4), Player(1), true)
    SetPlayerAllianceStateVisionBJ(Player(4), Player(2), true)
    SetPlayerAllianceStateVisionBJ(Player(4), Player(3), true)
    SetPlayerAllianceStateVisionBJ(Player(4), Player(5), true)
    SetPlayerAllianceStateVisionBJ(Player(4), Player(6), true)
    SetPlayerAllianceStateVisionBJ(Player(4), Player(7), true)
    SetPlayerAllianceStateVisionBJ(Player(5), Player(0), true)
    SetPlayerAllianceStateVisionBJ(Player(5), Player(1), true)
    SetPlayerAllianceStateVisionBJ(Player(5), Player(2), true)
    SetPlayerAllianceStateVisionBJ(Player(5), Player(3), true)
    SetPlayerAllianceStateVisionBJ(Player(5), Player(4), true)
    SetPlayerAllianceStateVisionBJ(Player(5), Player(6), true)
    SetPlayerAllianceStateVisionBJ(Player(5), Player(7), true)
    SetPlayerAllianceStateVisionBJ(Player(6), Player(0), true)
    SetPlayerAllianceStateVisionBJ(Player(6), Player(1), true)
    SetPlayerAllianceStateVisionBJ(Player(6), Player(2), true)
    SetPlayerAllianceStateVisionBJ(Player(6), Player(3), true)
    SetPlayerAllianceStateVisionBJ(Player(6), Player(4), true)
    SetPlayerAllianceStateVisionBJ(Player(6), Player(5), true)
    SetPlayerAllianceStateVisionBJ(Player(6), Player(7), true)
    SetPlayerAllianceStateVisionBJ(Player(7), Player(0), true)
    SetPlayerAllianceStateVisionBJ(Player(7), Player(1), true)
    SetPlayerAllianceStateVisionBJ(Player(7), Player(2), true)
    SetPlayerAllianceStateVisionBJ(Player(7), Player(3), true)
    SetPlayerAllianceStateVisionBJ(Player(7), Player(4), true)
    SetPlayerAllianceStateVisionBJ(Player(7), Player(5), true)
    SetPlayerAllianceStateVisionBJ(Player(7), Player(6), true)
    SetPlayerTeam(Player(8), 1)
    SetPlayerState(Player(8), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerTeam(Player(9), 1)
    SetPlayerState(Player(9), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerTeam(Player(10), 1)
    SetPlayerState(Player(10), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerTeam(Player(11), 1)
    SetPlayerState(Player(11), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerAllianceStateAllyBJ(Player(8), Player(9), true)
    SetPlayerAllianceStateAllyBJ(Player(8), Player(10), true)
    SetPlayerAllianceStateAllyBJ(Player(8), Player(11), true)
    SetPlayerAllianceStateAllyBJ(Player(9), Player(8), true)
    SetPlayerAllianceStateAllyBJ(Player(9), Player(10), true)
    SetPlayerAllianceStateAllyBJ(Player(9), Player(11), true)
    SetPlayerAllianceStateAllyBJ(Player(10), Player(8), true)
    SetPlayerAllianceStateAllyBJ(Player(10), Player(9), true)
    SetPlayerAllianceStateAllyBJ(Player(10), Player(11), true)
    SetPlayerAllianceStateAllyBJ(Player(11), Player(8), true)
    SetPlayerAllianceStateAllyBJ(Player(11), Player(9), true)
    SetPlayerAllianceStateAllyBJ(Player(11), Player(10), true)
    SetPlayerAllianceStateVisionBJ(Player(8), Player(9), true)
    SetPlayerAllianceStateVisionBJ(Player(8), Player(10), true)
    SetPlayerAllianceStateVisionBJ(Player(8), Player(11), true)
    SetPlayerAllianceStateVisionBJ(Player(9), Player(8), true)
    SetPlayerAllianceStateVisionBJ(Player(9), Player(10), true)
    SetPlayerAllianceStateVisionBJ(Player(9), Player(11), true)
    SetPlayerAllianceStateVisionBJ(Player(10), Player(8), true)
    SetPlayerAllianceStateVisionBJ(Player(10), Player(9), true)
    SetPlayerAllianceStateVisionBJ(Player(10), Player(11), true)
    SetPlayerAllianceStateVisionBJ(Player(11), Player(8), true)
    SetPlayerAllianceStateVisionBJ(Player(11), Player(9), true)
    SetPlayerAllianceStateVisionBJ(Player(11), Player(10), true)
end

function InitAllyPriorities()
    SetStartLocPrioCount(0, 1)
    SetStartLocPrio(0, 0, 1, MAP_LOC_PRIO_HIGH)
    SetStartLocPrioCount(1, 1)
    SetStartLocPrio(1, 0, 0, MAP_LOC_PRIO_HIGH)
    SetStartLocPrioCount(2, 1)
    SetStartLocPrio(2, 0, 3, MAP_LOC_PRIO_HIGH)
    SetStartLocPrioCount(3, 1)
    SetStartLocPrio(3, 0, 2, MAP_LOC_PRIO_HIGH)
    SetStartLocPrioCount(4, 1)
    SetStartLocPrio(4, 0, 5, MAP_LOC_PRIO_HIGH)
    SetStartLocPrioCount(5, 1)
    SetStartLocPrio(5, 0, 4, MAP_LOC_PRIO_HIGH)
    SetStartLocPrioCount(6, 1)
    SetStartLocPrio(6, 0, 7, MAP_LOC_PRIO_HIGH)
    SetStartLocPrioCount(7, 1)
    SetStartLocPrio(7, 0, 6, MAP_LOC_PRIO_HIGH)
end

function main()
    SetCameraBounds(-4224.0 + GetCameraMargin(CAMERA_MARGIN_LEFT), -4480.0 + GetCameraMargin(CAMERA_MARGIN_BOTTOM), 4096.0 - GetCameraMargin(CAMERA_MARGIN_RIGHT), 3968.0 - GetCameraMargin(CAMERA_MARGIN_TOP), -4224.0 + GetCameraMargin(CAMERA_MARGIN_LEFT), 3968.0 - GetCameraMargin(CAMERA_MARGIN_TOP), 4096.0 - GetCameraMargin(CAMERA_MARGIN_RIGHT), -4480.0 + GetCameraMargin(CAMERA_MARGIN_BOTTOM))
    SetDayNightModels("Environment\\DNC\\DNCLordaeron\\DNCLordaeronTerrain\\DNCLordaeronTerrain.mdl", "Environment\\DNC\\DNCLordaeron\\DNCLordaeronUnit\\DNCLordaeronUnit.mdl")
    NewSoundEnvironment("Default")
    SetAmbientDaySound("LordaeronSummerDay")
    SetAmbientNightSound("LordaeronSummerNight")
    SetMapMusic("Music", true, 0)
    CreateRegions()
    CreateAllItems()
    CreateAllUnits()
    InitBlizzard()
    InitGlobals()
end

function config()
    SetMapName("TRIGSTR_001")
    SetMapDescription("TRIGSTR_003")
    SetPlayers(12)
    SetTeams(12)
    SetGamePlacement(MAP_PLACEMENT_TEAMS_TOGETHER)
    DefineStartLocation(0, 256.0, -832.0)
    DefineStartLocation(1, 576.0, -832.0)
    DefineStartLocation(2, -640.0, -768.0)
    DefineStartLocation(3, -640.0, -448.0)
    DefineStartLocation(4, 640.0, 192.0)
    DefineStartLocation(5, 640.0, 512.0)
    DefineStartLocation(6, -256.0, 576.0)
    DefineStartLocation(7, -576.0, 576.0)
    DefineStartLocation(8, 0.0, -128.0)
    DefineStartLocation(9, 0.0, -128.0)
    DefineStartLocation(10, 0.0, -128.0)
    DefineStartLocation(11, 0.0, -128.0)
    InitCustomPlayerSlots()
    InitCustomTeams()
    InitAllyPriorities()
end

