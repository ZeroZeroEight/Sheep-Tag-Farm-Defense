

import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";


//===========================================================================
// Trigger: Homing End
//===========================================================================
const Trig_Homing_End_Conditions = (): boolean => {


	if ( ( ! ( GetUnitTypeId( GetTriggerUnit() ) === FourCC( "h00B" ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Homing_End_Func003A = (): void => {

	SetUnitPathing( GetEnumUnit(), true )
	SetUnitFlyHeightBJ( GetEnumUnit(), 0, 0 )
	SetUnitMoveSpeed( GetEnumUnit(), GetUnitDefaultMoveSpeed( GetEnumUnit() ) )
	IssueImmediateOrderBJ( GetEnumUnit(), "stop" )
	udg_TempPoint = GetUnitLoc( GetEnumUnit() );
	SetUnitPositionLoc( GetEnumUnit(), udg_TempPoint )
	RemoveLocation( udg_TempPoint )

};


const Trig_Homing_End_Actions = (): void => {

	RemoveUnit( GetTriggerUnit() )
	udg_TempGroup = GetUnitsOfTypeIdAll( FourCC( "E009" ) );
	ForGroupBJ( udg_TempGroup, Trig_Homing_End_Func003A )
	DestroyGroup( udg_TempGroup )
	DestroyGroup( udg_TempGroup3 )
	bj_forLoopAIndex = 1;
	bj_forLoopAIndexEnd = udg_RoundInfo[ 999 ];

	while ( true ) {

		if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
		DestroyEffectBJ( udg_HomingEffect[ GetForLoopIndexA() ] )
		bj_forLoopAIndex = bj_forLoopAIndex + 1;

	}


	DisableTrigger( gg_trg_Homing_Effect )
	DisableTrigger( gg_trg_Homing_Move )

};


//===========================================================================
const InitTrig_Homing_End = (): void => {

	gg_trg_Homing_End = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ( gg_trg_Homing_End, EVENT_PLAYER_UNIT_DEATH )
	TriggerAddCondition( gg_trg_Homing_End, Condition( Trig_Homing_End_Conditions ) )
	TriggerAddAction( gg_trg_Homing_End, Trig_Homing_End_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Homing_End();

} );
