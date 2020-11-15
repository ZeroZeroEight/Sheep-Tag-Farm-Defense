

import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";


//===========================================================================
// Trigger: Round 10
//===========================================================================
const Trig_Round_10_Conditions = (): boolean => {


	if ( ( ! ( udg_RoundInfo[ 1 ] === 10 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Round_10_Func002Func003Func001C = (): boolean => {


	if ( ( ! ( "p" === SubStringBJ( StringCase( udg_SetupString[ 0 ], false ), 1, 1 ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Round_10_Func002Func003C = (): boolean => {


	if ( ( ! ( "h" === SubStringBJ( StringCase( udg_SetupString[ 0 ], false ), 1, 1 ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Round_10_Func002C = (): boolean => {


	if ( ( ! ( udg_RoundInfo[ 10 ] === 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Round_10_Actions = (): void => {


	if ( ( Trig_Round_10_Func002C() ) ) {

		StartTimerBJ( udg_RobotTimer, false, 15 )
		DisplayTimedTextToForce( GetPlayersAll(), 10, "TRIGSTR_424" )
		udg_RoundInfo[ 10 ] = 1;

	} else {

		udg_TempPoint = GetRectCenter( gg_rct_Fence_Zone );

		if ( ( Trig_Round_10_Func002Func003C() ) ) {

			CreateNUnitsAtLoc( 8, FourCC( "n006" ), Player( 8 ), udg_TempPoint, bj_UNIT_FACING )

		} else {


			if ( ( Trig_Round_10_Func002Func003Func001C() ) ) {

				CreateNUnitsAtLoc( 5, FourCC( "n006" ), Player( 8 ), udg_TempPoint, bj_UNIT_FACING )

			} else {

				CreateNUnitsAtLoc( 3, FourCC( "n006" ), Player( 8 ), udg_TempPoint, bj_UNIT_FACING )

			}


		}

		RemoveLocation( udg_TempPoint )

	}


};


//===========================================================================
const InitTrig_Round_10 = (): void => {

	gg_trg_Round_10 = CreateTrigger();
	TriggerRegisterTimerExpireEventBJ( gg_trg_Round_10, udg_RobotTimer )
	TriggerAddCondition( gg_trg_Round_10, Condition( Trig_Round_10_Conditions ) )
	TriggerAddAction( gg_trg_Round_10, Trig_Round_10_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Round_10();

} );
