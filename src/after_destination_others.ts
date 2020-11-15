
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: After Destination Others
//===========================================================================
const Trig_After_Destination_Others_Func001Func002Func001Func001C = (): boolean => {


	if ( ( ( udg_AfterDestination[ udg_LoopIndex ] === 9 ) ) ) {

		return true;

	}


	if ( ( ( udg_AfterDestination[ udg_LoopIndex ] === 10 ) ) ) {

		return true;

	}

	return false;

};


const Trig_After_Destination_Others_Func001Func002Func001Func005C = (): boolean => {


	if ( ( ! ( udg_AfterDestination[ udg_LoopIndex ] === 10 ) ) ) {

		return false;

	}

	return true;

};


const Trig_After_Destination_Others_Func001Func002Func001C = (): boolean => {


	if ( ( ! Trig_After_Destination_Others_Func001Func002Func001Func001C() ) ) {

		return false;

	}

	return true;

};


const Trig_After_Destination_Others_Func001Func002Func002C = (): boolean => {


	if ( ( ( udg_AfterDestination[ udg_LoopIndex ] === 7 ) ) ) {

		return true;

	}


	if ( ( ( udg_AfterDestination[ udg_LoopIndex ] === 8 ) ) ) {

		return true;

	}


	if ( ( ( udg_AfterDestination[ udg_LoopIndex ] === 12 ) ) ) {

		return true;

	}


	if ( ( ( udg_AfterDestination[ udg_LoopIndex ] === 13 ) ) ) {

		return true;

	}

	return false;

};


const Trig_After_Destination_Others_Func001Func002Func006Func001C = (): boolean => {


	if ( ( ( udg_AfterDestination[ udg_LoopIndex ] === 8 ) ) ) {

		return true;

	}


	if ( ( ( udg_AfterDestination[ udg_LoopIndex ] === 13 ) ) ) {

		return true;

	}

	return false;

};


const Trig_After_Destination_Others_Func001Func002Func006C = (): boolean => {


	if ( ( ! Trig_After_Destination_Others_Func001Func002Func006Func001C() ) ) {

		return false;

	}

	return true;

};


const Trig_After_Destination_Others_Func001Func002Func008Func001C = (): boolean => {


	if ( ( ( udg_AfterDestination[ udg_LoopIndex ] === 13 ) ) ) {

		return true;

	}


	if ( ( ( udg_AfterDestination[ udg_LoopIndex ] === 12 ) ) ) {

		return true;

	}

	return false;

};


const Trig_After_Destination_Others_Func001Func002Func008C = (): boolean => {


	if ( ( ! Trig_After_Destination_Others_Func001Func002Func008Func001C() ) ) {

		return false;

	}

	return true;

};


const Trig_After_Destination_Others_Func001Func002C = (): boolean => {


	if ( ( ! Trig_After_Destination_Others_Func001Func002Func002C() ) ) {

		return false;

	}

	return true;

};


const Trig_After_Destination_Others_Func001C = (): boolean => {


	if ( ( ! ( udg_AfterDestination[ udg_LoopIndex ] === 11 ) ) ) {

		return false;

	}

	return true;

};


const Trig_After_Destination_Others_Actions = (): void => {


	if ( ( Trig_After_Destination_Others_Func001C() ) ) {

		udg_Angle[ udg_LoopIndex ] = GetUnitFacing( udg_Missile[ udg_LoopIndex ] );
		ConditionalTriggerExecute( gg_trg_Fragment )
		KillUnit( udg_Missile[ udg_LoopIndex ] )

	} else {


		if ( ( Trig_After_Destination_Others_Func001Func002C() ) ) {

			udg_Distance[ udg_LoopIndex ] = ( udg_Distance[ udg_LoopIndex ] / 2 );
			udg_VerticalArc[ udg_LoopIndex ] = ( udg_VerticalArc[ udg_LoopIndex ] / 2 );
			udg_CollisionRadius[ udg_LoopIndex ] = 0;

			if ( ( Trig_After_Destination_Others_Func001Func002Func006C() ) ) {

				udg_Damage[ udg_LoopIndex ] = ( udg_Damage[ udg_LoopIndex ] / 2 );

			} else {

			null

			}

			SetUnitManaBJ( udg_Missile[ udg_LoopIndex ], 0 )

			if ( ( Trig_After_Destination_Others_Func001Func002Func008C() ) ) {

				udg_AfterDestination[ udg_LoopIndex ] = 11;

			} else {

				udg_DamageMethod[ udg_LoopIndex ] = 1;

			}

			RemoveLocation( udg_StartPoint[ udg_LoopIndex ] )
			udg_StartPoint[ udg_LoopIndex ] = GetUnitLoc( udg_Missile[ udg_LoopIndex ] );

		} else {


			if ( ( Trig_After_Destination_Others_Func001Func002Func001C() ) ) {

				udg_Distance[ udg_LoopIndex ] = ( udg_Distance[ udg_LoopIndex ] / 2 );
				udg_VerticalArc[ udg_LoopIndex ] = ( udg_VerticalArc[ udg_LoopIndex ] / 2 );
				udg_CollisionRadius[ udg_LoopIndex ] = 0;

				if ( ( Trig_After_Destination_Others_Func001Func002Func001Func005C() ) ) {

					udg_Damage[ udg_LoopIndex ] = ( udg_Damage[ udg_LoopIndex ] / 2 );
					udg_AfterDestination[ udg_LoopIndex ] = 8;

				} else {

					udg_AfterDestination[ udg_LoopIndex ] = 7;

				}

				SetUnitManaBJ( udg_Missile[ udg_LoopIndex ], 0 )
				RemoveLocation( udg_StartPoint[ udg_LoopIndex ] )
				udg_StartPoint[ udg_LoopIndex ] = GetUnitLoc( udg_Missile[ udg_LoopIndex ] );

			} else {

			null

			}


		}


	}


};


//===========================================================================
const InitTrig_After_Destination_Others = (): void => {

	gg_trg_After_Destination_Others = CreateTrigger();
	TriggerAddAction( gg_trg_After_Destination_Others, Trig_After_Destination_Others_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_After_Destination_Others();
} );
